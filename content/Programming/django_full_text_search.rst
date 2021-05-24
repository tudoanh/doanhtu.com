######################################
Django full text search (Postgres)
######################################

:date: 24/05/21 11:18
:tags: django, postgres, index, full, text, search
:authors: Do Anh Tu
:category: Math


Let's say we have a large database, few milions row, one-to-many relationship models with some text field, and we want to **search** some keywords.

Traditional way will be real pain and slow, I know. So let's do something smart and enjoy lightning-fast execution with `Full Text Search <https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/>`_.

.. image:: https://media.giphy.com/media/10vA3MTGTKeb16/giphy.gif
   :width: 500px

|

Suppose we have an app named `main` and it's models look like this

.. code-block:: python

   from django.db import models

    class Parent(models.Model):
        title = models.CharField(max_length=255)

    class Child(models.Model):
        parent = models.ForeignKey(Parent, on_delete=models.CASCADE, related_name="children")
        content = models.TextField(null=True, blank=True)

For example, we want to search *keyword* in childs content, and we want to do it quick! You can do like `this <https://stackoverflow.com/questions/40405003/django-postgres-full-text-search-in-reverse-related-models>`_, but that not quick enough for me. Maybe because I have too damn much data. But there are other way. First we need to add this line to `settings.py`

.. code-block:: python

   settings = [
       # ...
       "django.contrib.postgres",
       # ...
    ]

Then we add `SearchVectorField` to the model

.. code-block:: python

   search_vector = SearchVectorField(null=True, blank=True)

Finally we can create index

.. code-block:: python

   from django.contrib.postgres.search import SearchVectorField
   from django.contrib.postgres.indexes import GinIndex

   class Child(models.Model):
       content = models.TextField(null=True, blank=True)
       search_vector = SearchVectorField(null=True, blank=True)

       class Meta:
           indexes = [GinIndex(fields=['search_vector'])]

Now for the old data, we need to run this line to update their search vector, you may run this as a script or run it in `python manage.py shell`

.. code-block:: python

   from django.contrib.postgres.search import SearchVector

   Child.objects.update(search_vector=SearchVector('content'))

That will do the trick. Now you can search like a pro, high accuracy and high performance.

.. code-block:: python

   Child.objects.filter(search_vector=keywords)

   Child.objects.filter(search_vector=keywords).values_list("parent", flat=True).distinct()  # To get all parent objects, for various purposes

You may think, "Oh, simple and elegant, like the way nature should be". But that's not it. We not done yet. We need to **update search vector for new created objects** too. And we'll using the power of `Django Signal <https://docs.djangoproject.com/en/3.2/topics/signals/>`_.

Let's create a file `signals.py` inside `main` directory, and fill it with

.. code-block:: python

   from django.db.models.signals import post_save
   from django.dispatch import receiver
   from django.contrib.postgres.search import SearchVector

   from main.models import Child

   @receiver(post_save, sender=Child)
   def update_search_vector(sender, instance, **kwargs):
       Child.objects.filter(id=instance.id).update(search_vector=SearchVector('content'))

You may ask "Why not just assign :code:`instance.search_vector=SearchVector('content')` then :code:`instance.save()`?". Good question, but we can not do that. You may try and got this error

.. code-block:: bash

    F() expressions can only be used to update, not to insert.

Search and read the reasons. Last thing, we need to register the signal to our app. Update the file `main/apps.py` to add this line:

.. code-block:: python

   def ready(self):
       import main.signals

Then `main/__init__.py`

.. code-block:: python

   default_app_config = "main.apps.MainConfig"

And we are officially done. Good luck.
