// https://leetcode.com/problems/binary-search/submissions/1438035075/

function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((r + l) / 2);
    console.log("==l", l)
    console.log("==r", r)
    console.log("==mid", mid)
    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1
}

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
// console.log(search([5], 5));
console.log(search([2, 5], 5))