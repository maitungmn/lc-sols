// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  // Edge case: empty array
  if (nums.length === 0) return [-1, -1];

  // Find first position
  const first = findBound(nums, target, true);

  // If target not found, return [-1, -1]
  if (first === -1) return [-1, -1];

  // Find last position
  const last = findBound(nums, target, false);

  return [first, last];
}

/**
* Binary search helper to find either first or last position
* @param {number[]} nums
* @param {number} target
* @param {boolean} isFirst - if true, find first position; if false, find last position
* @return {number}
*/
function findBound(nums, target, isFirst) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      result = mid; // Found a potential result

      if (isFirst) {
        // For first position, continue searching in left half
        right = mid - 1;
      } else {
        // For last position, continue searching in right half
        left = mid + 1;
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// Test cases
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));  // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));  // [-1,-1]
console.log(searchRange([], 0));  // [-1,-1]