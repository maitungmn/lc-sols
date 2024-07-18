# https://leetcode.com/problems/power-of-two/description/?envType=daily-question&envId=2024-04-19

def isPowerOfTwo(n: int) -> bool:
    if n <= 0:
        return False
    return (n & (n - 1)) == 0
  
print(isPowerOfTwo(2))
print(isPowerOfTwo(3))
print(isPowerOfTwo(30))
print(isPowerOfTwo(64))