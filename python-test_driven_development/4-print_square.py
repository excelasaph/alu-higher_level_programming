#!/usr/bin/python3
"""
a function that prints a square with the character #

Prototype: def print_square(size)

size is the size length of the square

You are not allowed to import any module
"""


def print_square(size):
    """
    size must be an integer, otherwise raise

    a TypeError exception with the message

    size must be an integer

    if size is less than 0, raise a ValueError

    exception with the message size must be >= 0

    if size is a float and is less than 0,

    raise a TypeError exception with the message

    size must be an integer
    """
    try:
        if isinstance(size, float) and size < 0:
            raise TypeError("size must be an integer")
        elif not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        char = ""
        for i in range(size):
            for _ in range(size):
                char += '#'
            if i != size - 1:
                char += '\n'
        if size == 0:
            return print(end="")
        else:
            return print(char)
    except TypeError:
        raise
    except ValueError:
        raise
    except OverflowError:
        raise
# print_square(4)
# print_square(5)
# print_square(10)
# print_square(-1.5)
# print_square("1.5")
# print_square("hello")
# print_square(None)
# print_square(-3)
# print_square()
