#!/usr/bin/python3
"""Unittest for max_integer([..])
"""
import unittest
max_integer = __import__('6-max_integer').max_integer


class TestMaxInteger(unittest.TestCase):
    """
    This is a class built for handing testMaxIntegerCases.

    This test cases are for my 6-max_integer.py

    This test case will have about 6 cases that

    are methods and, I will handle at first and then

    fix in my 6-max_integer.py file.
    """
    def testListAllIntegers(self):
        """
        This test for cases whereby a

        list of all integers is given

        either positive, negative, or

        zero.
        """
        self.assertEqual(max_integer([2, 4, 5, 6, 10, 2, 5]), 10)
        self.assertEqual(max_integer([-6, -10, -4, -2, -1]), -1)
        self.assertEqual(max_integer([-10, 30, -15, 100, -2]), 100)
        self.assertEqual(max_integer([100, 2, 4, 20, 50]), 100)
        self.assertEqual(max_integer([100, 6, 7, 9, 200]), 200)
        self.assertEqual(max_integer([1, 4, 40, 4, 7]), 40)

    def testEmptyList(self):
        """
        This is a test case

        for empty list which

        returns None if it is

        an Empty List.
        """
        self.assertEqual(max_integer([]), None)
        self.assertEqual(max_integer([]), None)

    def testNoArguementInFunction(self):
        """
        This is a test case

        when no arguement is given

        to the max_integer function
        """
        self.assertEqual(max_integer(), None)
        self.assertEqual(max_integer(), None)

    def testOneElementInList(self):
        self.assertEqual(max_integer([2]), 2)
        self.assertEqual(max_integer([-100]), -100)
        self.assertEqual(max_integer([-10]), -10)
        self.assertEqual(max_integer([8]), 8)
