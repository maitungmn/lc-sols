// https://leetcode.com/problems/bitwise-ors-of-subarrays/description/

function subarrayBitwiseORs(arr) {
  const n = arr.length;

  let ans = new Set(),
    cur = new Set();

  for (let i = 0; i < n; i++) {
    const num = arr[i],
      me = new Set([num]);
    for (const val of cur)
      me.add(val | num)
    cur = me
    for (const x of cur)
      ans.add(x)
  }

  return ans.size;
}

// Test cases
console.log(subarrayBitwiseORs([0]));          // Output: 1
console.log(subarrayBitwiseORs([1, 1, 2]));      // Output: 3
console.log(subarrayBitwiseORs([1, 2, 4]));      // Output: 6