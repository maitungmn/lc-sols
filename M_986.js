// https://leetcode.com/problems/interval-list-intersections/description/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
function intervalIntersection(A, B) {
  let Ai = 0, Bi = 0;
  let res = [];

  while (Ai < A.length && Bi < B.length) {
    let maxStart = Math.max(A[Ai][0], B[Bi][0]);
    let minEnd = Math.min(A[Ai][1], B[Bi][1]);

    if (maxStart <= minEnd) res.push([maxStart, minEnd]) // overlap found

    if (A[Ai][1] < B[Bi][1]) Ai++;
    else Bi++;
  }

  return res;
}

// Test cases
const test1FirstList = [[0, 2], [5, 10], [13, 23], [24, 25]];
const test1SecondList = [[1, 5], [8, 12], [15, 24], [25, 26]];
console.log(intervalIntersection(test1FirstList, test1SecondList));
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

const test2FirstList = [[1, 3], [5, 9]];
const test2SecondList = [];
console.log(intervalIntersection(test2FirstList, test2SecondList));
// Output: []