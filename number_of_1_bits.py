# https://leetcode.com/problems/number-of-1-bits/description/?envType=daily-question&envId=2024-04-19


def count_set_bits(n):
    """
    Returns the number of set bits in the binary representation of a positive integer.

    Args:
        n (int): A positive integer.

    Returns:
        int: The number of set bits in the binary representation of n.
    """
    count = 0
    while n:
        # Check the least significant bit
        if n & 1 == 1:
            count += 1
        # Shift n to the right by 1 bit
        n >>= 1
        print(f"n-{n}")
    return count


print(count_set_bits(11))  # Output: 3
# print(count_set_bits(128))  # Output: 1
# print(count_set_bits(2147483645))  # Output: 30
