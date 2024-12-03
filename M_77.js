// https://leetcode.com/problems/combinations/description/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  function backtrack(start, currentArr) {
    if (currentArr.length === k) {
      res.push([...currentArr])
      return
    }

    for (let i = start; i <= n; i++) {
      currentArr.push(i)
      backtrack(i + 1, currentArr)
      currentArr.pop()
    }
  }

  backtrack(1, [])
  return res
};

// Test cases
console.log(combine(4, 2));  // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// console.log(combine(1, 1));  // [[1]]