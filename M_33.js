/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Found the target
    if (nums[mid] === target) {
      return mid;
    }

    // Check if the left half is sorted
    if (nums[left] <= nums[mid]) {
      // Check if target is in the left sorted portion
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half must be sorted
    else {
      // Check if target is in the right sorted portion
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1; // Target not found
}

// Test cases
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));  // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));  // Output: -1
console.log(search([1], 0));              // Output: -1