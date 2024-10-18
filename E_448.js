// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

function findDisappearedNumbers (nums) {
  if(nums <= 1) return [];

  const res = [];
  const numbSet = new Set(nums);

  let len = nums.length;
  while (len > 0) {
    if(!numbSet.has(len)) {
      res.push(len)
    }
    --len;
  }

  return res
}