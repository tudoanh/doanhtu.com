Title: Learn Elixir - Part I
Date: 2017-11-24 23:11
Tags: learn, elixir, programming
Authors: Do Anh Tu

The Elixir programming language wraps functional programming with
immutable state and an actor-based approach to concurrency in a tidy,
modern syntax. And it runs on the industrial-strength, high-performance,
distributed Erlang VM. But what does all that mean?  

It means you can stop worrying about many of the difficult things that currently consume your time. You no longer have to think too hard about protecting your data consistency in a multithreaded environment. You worry less
about scaling your applications. And, most importantly, you can think about
programming in a different way.

### Programming Should Be About Transforming Data

If you come from an object-oriented world, then you are used to thinking in
terms of classes and their instances. A class defines behavior, and objects
hold state. Developers spend time coming up with intricate hierarchies of
classes that try to model their problem, much as Victorian gentleman scientists
created taxonomies of butterflies.  
When we code with objects, we’re thinking about state. Much of our time is
spent calling methods in objects and passing them other objects. Based on
these calls, objects update their own state, and possibly the state of other
objects. In this world, the class is king—it defines what each instance can
do, and it implicitly controls the state of the data its instances hold. Our goal is data-hiding.  
But that’s not the real world. In the real world, we don’t want to model abstract
hierarchies (because in reality there aren’t that many true hierarchies). We
want to get things done, not maintain state.  