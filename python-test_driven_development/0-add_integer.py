#!/usr/bin/python3
"""
A function that adds 2 integers

Prototype: def add_integer(a, b=98)

You are not allowed to import any module
"""


def add_integer(a, b=98):
    """
    a and b must be integers or floats, otherwise raise a TypeError

    exception with the message a must be an integer or b

    must be an integer a and b must be first casted to

    integers if they are float

    Returns an integer: the addition of a and b
    """
    try:
        if not isinstance(a, int) and not isinstance(a, float):
            raise TypeError("a must be an integer")
        elif not isinstance(b, int) and not isinstance(b, float):
            raise TypeError("b must be an integer")
        else:
            a = int(a)
            b = int(b)
            return a + b
    except TypeError:
        raise
    except OverflowError:
        raise
    except ValueError:
        raise
