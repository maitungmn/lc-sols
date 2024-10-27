// https://leetcode.com/problems/power-of-four/description/

const isPowerOfFour = function(n) {
  // If n is less than or equal to 0, it can't be a power of 4
  if (n <= 0) return false;
  
  // Keep dividing by 4 as long as n is divisible by 4
  while (n % 4 === 0) {
      n = n / 4;
  }
  
  // If n equals 1, it was a power of 4
  return n === 1;
};