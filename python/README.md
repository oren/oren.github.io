# Learn Python in 7 days

Test-driven programming in Python.

Open the terminal, copy this into my_program.py file and run 'python my_program.py'

You should see OK:

Ran 2 tests in 0.000s

OK

my_program.py:

import unittest

def sum(arr):
    total = 0

    for val in arr:
        total += val

    return total

class TestSum(unittest.TestCase):
    def test_list_int(self):
        """
        Test that it can sum a list of integers
        """

        data = [1, 2, 3]
        result = sum(data)

        self.assertEqual(result, 6)

    def test_negative(self):
        """
        Test that negative numbers works
        """

        data = [-1, 2, 3]
        result = sum(data)

        self.assertEqual(result, 4)

if _name_ == '_main_':
    unittest.main()
