// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const findMaxFish = (grid) => {
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] < 1) continue;
      max = Math.max(max, dfs(i, j, grid));
    }
  }

  return max;
};

const dfs = (r, c, grid) => {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return 0;
  if (grid[r][c] < 1) return 0;

  let fishes = grid[r][c];
  grid[r][c] = 0;

  return fishes +
    dfs(r + 1, c, grid) +
    dfs(r - 1, c, grid) +
    dfs(r, c + 1, grid) +
    dfs(r, c - 1, grid);
}

// Test cases
const grid1 = [[0, 2, 1, 0], [4, 0, 0, 3], [1, 0, 0, 4], [0, 3, 2, 0]];
console.log("Example 1:", findMaxFish(grid1)); // Output: 7

const grid2 = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]];
console.log("Example 2:", findMaxFish(grid2)); // Output: 1