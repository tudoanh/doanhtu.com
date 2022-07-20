Title: Django Signal + Celery
Date: 07/20/22 10:31
Tags: django,celery
Authos: Do Anh Tu

Nếu bạn muốn dùng Celery task trong các Signals của Django, bạn cần làm như sau để tránh tình trạng bắn task quá nhanh, khiến bên trong `task` nếu query `pk=id` sẽ bị lỗi NotFound (do dữ liệu chưa kịp lưu vào database).

```python
from django.db import transaction
from .models import MyModel
from .tasks import task

@receiver(post_save, sender=MyModel)
def my_model_post_save(sender, instance, **kwargs):
    transaction.on_commit(lambda: task.delay(args=(instance.id,)))
```

Ở đây ta đợi transaction commit xong mới chạy task. Problem solved.
