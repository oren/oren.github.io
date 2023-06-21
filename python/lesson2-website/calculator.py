import unittest

# add all numbers in an list
def add(arr):
    total = 0

    for val in arr:
        total += val

    return total

class TestAdd(unittest.TestCase):
    def test_list_int(self):
        """
        Test that it can sum a list of integers
        """

        data = [1, 2, 3]
        result = add(data)

        self.assertEqual(result, 6)

    def test_negative(self):
        """
        Test that negative numbers works
        """

        data = [-1, 2, 3]
        result = add(data)

        self.assertEqual(result, 4)

if __name__ == '__main__':
    unittest.main()

