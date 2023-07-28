#!/usr/bin/python3
# 1-my_list.py
"""This is a python module
that inherits from th built-in
class List and creates a sorted
function to sort the list not
in-place
"""


class MyList(list):
    """This is my class
    MyList that inherits from
    the built in class list
    an creates a sorted function
    """
    # An initialization method of an empty list is done by the parent class
    def __init__(self):
        super().__init__()

    def append(self, value):
        super().append(value)

    def print_sorted(self, do_print=True):
        """This is the sorted function
        that sorts the the the instance
        of the list mylist which inherits
        the abilities of the class list
        and the method .sort() and sorts
        the instance not in place
        """
        sorted_list = sorted(self)
        if do_print:
            print(sorted_list)
        return sorted_list

    def __str__(self):
        return super().__str__()
