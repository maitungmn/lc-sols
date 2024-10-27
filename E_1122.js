// https://leetcode.com/problems/relative-sort-array/description/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  // Create a map to store frequency of elements in arr1
  const countMap = new Map();
  for (const num of arr1) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  
  // Create result array
  const result = [];
  
  // First, add elements according to arr2 order
  for (const num of arr2) {
      // Add the number as many times as it appears in arr1
      const count = countMap.get(num);
      for (let i = 0; i < count; i++) {
          result.push(num);
      }
      // Remove this number from the map as it's been processed
      countMap.delete(num);
  }
  
  // For remaining numbers in arr1 that don't appear in arr2
  // Sort them in ascending order
  const remaining = [];
  for (const [num, count] of countMap.entries()) {
      for (let i = 0; i < count; i++) {
          remaining.push(num);
      }
  }
  remaining.sort((a, b) => a - b);
  
  // Append the remaining numbers to the result
  return result.concat(remaining);
}

// Test cases
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
// Output: [2,2,2,1,4,3,3,9,6,7,19]

console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]));
// Output: [22,28,8,6,17,44]