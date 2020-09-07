My math notes - Part 1
==========================
:date: 2020-09-07 23:36
:tags: note, math
:authors: Do Anh Tu
:category: Math

Sequence
----------

https://en.wikipedia.org/wiki/Sequence

- Sequence is like list
- Often write like this: :math:`a_n, b_n, c_n`

Example: :math:`\{(p_t, v_t)_{t=1,...,T}\}` where :math:`p_t` is the price associated with tick *t* and :math:`v_t` is the volume associated with tick *t*. The so-called tick rule defines a sequence :math:`\{b_t\}_{t=1,...,T}` where

.. math::

   b_t=
   \begin{cases}
       b_{t-1} &\text{if \(\Delta{p_t}=0\)} \\
       \frac{\Delta{p_t}}{\Delta{p_t}} &\text{if \(\Delta{p_t}\neq0\)}
   \end{cases}
