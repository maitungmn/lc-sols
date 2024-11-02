// https://leetcode.com/problems/bitwise-and-of-numbers-range/description/

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function rangeBitwiseAnd(left, right) {
  // If numbers are equal, return either one
  if (left === right) return left;
  
  // Handle edge cases
  if (left === 0 || right === 0) return 0;
  
  // Find the common most significant bits
  let shift = 0;
  while (left !== right) {
      left >>= 1;
      right >>= 1;
      shift++;
  }
  
  // Shift back to get the result
  return left << shift;
}

// Test cases
const testCases = [
  { left: 5, right: 7, expected: 4 },
  { left: 0, right: 0, expected: 0 },
  { left: 1, right: 2147483647, expected: 0 }
];

testCases.forEach(({ left, right, expected }) => {
  const result = rangeBitwiseAnd(left, right);
  console.log(
      `Input: left = ${left}, right = ${right}\n` +
      `Output: ${result}\n` +
      `Expected: ${expected}\n` +
      `Test ${result === expected ? 'PASSED' : 'FAILED'}\n`
  );
});