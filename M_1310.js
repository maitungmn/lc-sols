// https://leetcode.com/problems/xor-queries-of-a-subarray/

function xorQueries(arr, queries) {

  const pref = new Array(arr.length).fill(0);
  pref[0] = arr[0];
  for (let i = 1; i < pref.length; i++) {
    pref[i] = pref[i - 1] ^ arr[i];
  }
  return queries.map(([l, r]) => pref[r] ^ (l == 0 ? 0 : pref[l - 1]));
}


console.log(xorQueries([1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]])) // [2,7,14,8]