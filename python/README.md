# Learn Python in 7 days

## Lesson 1: test driven development
* What will you do? write your first python program with tests.
* Time: 5 minutes
* Requirements: a laptop

## 2. Do this
Open the terminal, copy the code below into my_program.py file and run 'python my_program.py'

You should see OK:

```
Ran 2 tests in 0.000s

OK
```

my_program.py:

```
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
```

## 3. What is this?
Congrats!!!

You wrote a function that calculate the total numbers of elements and wrote 2 tests for it.
