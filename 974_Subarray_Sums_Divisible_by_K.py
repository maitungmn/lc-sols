# https://leetcode.com/problems/subarray-sums-divisible-by-k/description/?envType=daily-question&envId=2024-04-19


def subarrays_div_by_k(nums, k):
    prefix_sum = 0
    count = 0
    remainder_count = {
        0: 1
    }  # Initialize with 0 remainder to handle subarrays starting from index 0

    for num in nums:
        prefix_sum += num
        remainder = prefix_sum % k

        # Adjust remainder to be positive
        if remainder < 0:
            remainder += k

        if remainder in remainder_count:
            count += remainder_count[remainder]
            remainder_count[remainder] += 1
        else:
            remainder_count[remainder] = 1

    return count


# Example usage:
print(subarrays_div_by_k([4, 5, 0, -2, -3, 1], 5))  # Output: 7
print(subarrays_div_by_k([5], 9))  # Output: 0
