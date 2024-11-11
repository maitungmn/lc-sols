// https://leetcode.com/problems/number-of-provinces/description/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let visisted = new Array(isConnected.length + 1).fill(0);
  let count = 0;
  let traverse = (index) => {
    let neighbours = isConnected[index - 1];
    if (neighbours && neighbours.length) {
      for (let i = 0; i < neighbours.length; i++) {
        if (visisted[i + 1] == 0 && neighbours[i] == 1) {
          visisted[i + 1] = 1;
          traverse(i + 1)
        }
      }
    }
  }
  for (let i = 1; i <= visisted.length; i++) {
    if (visisted[i] == 0) {
      traverse(i);
      count++;
    }
  }
  return count;
};

// Test Example 1
console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // Output: 2

// Test Example 2
console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]])); // Output: 3