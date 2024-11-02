E_35.js

// https://leetcode.com/problems/search-insert-position/description/

function searchInsert(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid = 0;

  while (l <= r) {
    mid = Math.floor((r + l) / 2);
    console.log('===l', l);
    console.log('===r', r);
    console.log('===m', mid);
    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l
}

console.log(searchInsert([1, 3, 5, 6], 2))