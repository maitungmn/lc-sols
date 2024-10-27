//https://leetcode.com/problems/sum-of-digits-in-base-k/

const sumBase = function(n, k) {
  // Convert n to base k
  const baseK = n.toString(k);
  
  // Sum all digits (treating them as base 10 numbers)
  let sum = 0;
  for (let digit of baseK) {
      sum += parseInt(digit, 10);
  }
  
  return sum;
};

// const sumBase = function(n, k) {
//   let sum = 0;
  
//   // Convert to base k and sum digits simultaneously
//   while (n > 0) {
//       sum += n % k;  // Get the last digit in base k
//       n = Math.floor(n / k);  // Remove the last digit
//   }
  
//   return sum;
// };