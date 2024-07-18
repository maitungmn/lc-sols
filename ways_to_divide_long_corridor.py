# https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/description/?envType=daily-question&envId=2024-04-19


class Solution:
    def numberOfWays(self, corridor: str) -> int:
        mod = 10**9 + 7
        seats = []

        for i, c in enumerate(corridor):
            if c == "S":
                seats.append(i)

        length = len(seats)
        if length < 2 or length % 2 == 1:
            return 0

        res = 1
        i = 1
        while i < length - 1:
            res = (res * (seats[i + 1] - seats[i])) % mod
            i += 2
        return res
