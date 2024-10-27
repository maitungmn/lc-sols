// https://leetcode.com/problems/sort-the-students-by-their-kth-score/description/

/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
function sortTheStudents(score, k) {
  // Sort the score matrix based on the kth column (exam)
  return score.sort((a, b) => b[k] - a[k]);
}

// Example 1
const score1 = [[10,6,9,1],[7,5,11,2],[4,8,3,15]];
const k1 = 2;
console.log(sortTheStudents(score1, k1));
// Output: [[7,5,11,2],[10,6,9,1],[4,8,3,15]]

// Example 2
const score2 = [[3,4],[5,6]];
const k2 = 0;
console.log(sortTheStudents(score2, k2));
// Output: [[5,6],[3,4]]