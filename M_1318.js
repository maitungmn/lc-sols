// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/

function minFlips(a, b, c) {
  // Keep track of flips needed
  let flips = 0;
  
  // Compare bits until all numbers become 0
  while (a > 0 || b > 0 || c > 0) {
      // Get rightmost bits
      let bitA = a & 1;
      let bitB = b & 1;
      let bitC = c & 1;
      
      // If OR of a,b should equal c but doesn't
      if ((bitA | bitB) !== bitC) {
          if (bitC === 0) {
              // Need to flip both 1s to 0s
              flips += (bitA + bitB);
          } else {
              // Need to flip one 0 to 1
              flips += 1;
          }
      }
      
      // Right shift to check next bits
      a >>= 1;
      b >>= 1;
      c >>= 1;
  }
  
  return flips;
}

// Test cases
console.log(minFlips(2, 6, 5)); // 3
console.log(minFlips(4, 2, 7)); // 1
console.log(minFlips(1, 2, 3)); // 0