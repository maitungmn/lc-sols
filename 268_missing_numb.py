# https://leetcode.com/problems/missing-number/description/?envType=daily-question&envId=2024-04-19
def missingNumber(nums):
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum

# Example usage:
print(missingNumber([3, 0, 1]))  # Output: 2
print(missingNumber([0, 1]))     # Output: 2
print(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))  # Output: 8
