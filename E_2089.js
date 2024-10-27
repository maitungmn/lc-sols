// https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

/**
 * @param {number[]} nums - The input array
 * @param {number} target - The target number to find
 * @return {number[]} - Array of target indices in sorted order
 */
function targetIndices(nums, target) {
  // Step 1: Sort the array in non-decreasing order
  nums.sort((a, b) => a - b);
  
  // Step 2: Find all indices where nums[i] equals target
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
          result.push(i);
      }
      // Optimization: if we've passed the target, we can stop
      // since the array is sorted
      if (nums[i] > target) {
          break;
      }
  }
  
  return result;
}

// Test cases
console.log(targetIndices([1,2,5,2,3], 2));  // Output: [1,2]
console.log(targetIndices([1,2,5,2,3], 3));  // Output: [3]
console.log(targetIndices([1,2,5,2,3], 5));  // Output: [4]