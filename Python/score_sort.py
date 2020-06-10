# You created a game that is more popular than Angry Birds.

# Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

# Write a function that takes:

# a list of unsorted_scores
# the highest_possible_score in the game
# and returns a sorted list of scores in less than O(n\lg{n})O(nlgn) time.

# For example:

#   unsorted_scores = [37, 89, 41, 65, 91, 53]
# HIGHEST_POSSIBLE_SCORE = 100

# # Returns [91, 89, 65, 53, 41, 37]
# sort_scores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)

# Python 2.7
# We’re defining nn as the number of unsorted_scores because we’re expecting the number of players to keep climbing.

# And, we'll treat highest_possible_score as a constant instead of factoring it into our big O time and space costs because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude.

# Do you have an answer?

#YESSSSSS, see below for my solution

import unittest


def sort_scores(unsorted_scores, highest_possible_score):
  scoremap = {}
  sort_scores = [ ]
  for i in range(highest_possible_score):
    scoremap[i]=0

  for i in unsorted_scores:
    scoremap[i] = scoremap[i] + 1

  for i in range(highest_possible_score):
    if scoremap[i] > 0 :
      for j in range(scoremap[i]):
        sort_scores.append(i)

  return sort_scores[::-1]



















# Tests

class Test(unittest.TestCase):

    def test_no_scores(self):
        actual = sort_scores([], 100)
        expected = []
        self.assertEqual(actual, expected)

    def test_one_score(self):
        actual = sort_scores([55], 100)
        expected = [55]
        self.assertEqual(actual, expected)

    def test_two_scores(self):
        actual = sort_scores([30, 60], 100)
        expected = [60, 30]
        self.assertEqual(actual, expected)

    def test_many_scores(self):
        actual = sort_scores([37, 89, 41, 65, 91, 53], 100)
        expected = [91, 89, 65, 53, 41, 37]
        self.assertEqual(actual, expected)

    def test_repeated_scores(self):
        actual = sort_scores([20, 10, 30, 30, 10, 20], 100)
        expected = [30, 30, 20, 20, 10, 10]
        self.assertEqual(actual, expected)


unittest.main(verbosity=2)