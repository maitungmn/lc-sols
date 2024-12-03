// https://leetcode.com/problems/find-all-groups-of-farmland/description/

/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  if (!land || !land.length || !land[0].length) return [];

  const m = land.length
  const n = land[0].length
  const result = [];

  function findBottomRight(startRow, startCol) {
    let row = startRow;
    let col = startCol;

    while (row + 1 < m && land[row + 1][col] === 1) {
      row++
    }
    while (col + 1 < n && land[row][col + 1] === 1) {
      col++
    }

    return [row, col]
  }

  // Helper function to mark visited farmland
  function markVisited(r1, c1, r2, c2) {
    for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
        land[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (land[i][j] === 1) {
        const [bottomRow, bottomCol] = findBottomRight(i, j)
        result.push([i, j, bottomRow, bottomCol])
        markVisited(i, j, bottomRow, bottomCol)
      }
    }

  }

  return result
};

// Test with Example 1
const example1 = [[1, 0, 0], [0, 1, 1], [0, 1, 1]];
console.log(findFarmland(example1));  // [[0,0,0,0], [1,1,2,2]]

// Test with Example 2
const example2 = [[1, 1]];
console.log(findFarmland(example2));  // [[0,0,0,1]]