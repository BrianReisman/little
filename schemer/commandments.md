# COMMANDMENTS:

## 1

When recurring on a list of atoms, ask two questions about it:

* (null? lat)
* else

When recurring on a number, ask two questions about it:

* (zero? n)
* else

When recurring on a list of S-expressions (nested), ask three questions:

* (null? l)
* (atom? (car l))
* else


## 2

Use cons to build lists.


## 3

When building a list, describe the first typical element, and then cons it onto the natural recursion.


## 4

Always change at least one argument while recurring.

When recurring on a list of atoms, use (cdr lat).

When recurring on a number, use (sub1 n).

When recurring on a list of S-expressions (nested), use (car l) and (cdr l) if neither (null? l) nor (atom? (car l)) are true.

It must be changed to be closer to termination.

The changing argument must be tested in the termination condition.

When using cdr, test termination with (null? lat)

When using sub1, test termination with (zero? n)


## 5

When building a value with +, always use 0 for the value of the terminating line, because adding 0 does not change the value of an addition.

When building a value with ×, always use 1 for the value of the terminating line, because multiplying by 1 does not change the value of a multiplication.

When building a value with cons, always use () for the value of the terminating line.


## 6

Simplify only after the function is correct.

