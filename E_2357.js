// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
  // Create a Set to store unique non-zero numbers
  const uniqueNonZero = new Set();
  
  // Add all non-zero numbers to the set
  for (const num of nums) {
      if (num > 0) {
          uniqueNonZero.add(num);
      }
  }
  
  // The number of operations needed is equal to the number of unique non-zero values
  // Because in each operation, we'll subtract the smallest remaining number 
  // from all positive numbers
  return uniqueNonZero.size;
}

// Test cases
console.log(minimumOperations([1,5,0,3,5])); // Output: 3
console.log(minimumOperations([0])); // Output: 0