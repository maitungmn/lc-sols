from collections import deque
from typing import List


class Solution:
    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:
        res = []
        q = deque([(0, 0)])

        while q:
            row, col = q.popleft()
            res.append(nums[row][col])

            if col == 0 and row + 1 < len(nums):
                q.append((row + 1, 0))

            if col + 1 < len(nums[row]):
                q.append((row, col + 1))

        return res
