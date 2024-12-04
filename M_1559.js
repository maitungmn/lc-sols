// https://leetcode.com/problems/detect-cycles-in-2d-grid/description/

function containsCycle(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  function dfs(x, y, px, py) {
    if (visited[x][y]) return true;
    visited[x][y] = true;

    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && !(nx === px && ny === py) && grid[nx][ny] === grid[x][y]) {
        if (dfs(nx, ny, x, y)) return true;
      }
    }

    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j] && dfs(i, j, -1, -1)) {
        return true;
      }
    }
  }

  return false;
}

// Test cases
const grid1 = [
  ["a", "a", "a", "a"],
  ["a", "b", "b", "a"],
  ["a", "b", "b", "a"],
  ["a", "a", "a", "a"]
];

const grid2 = [
  ["c", "c", "c", "a"],
  ["c", "d", "c", "c"],
  ["c", "c", "e", "c"],
  ["f", "c", "c", "c"]
];

console.log(containsCycle(grid1)); // true
console.log(containsCycle(grid2)); // true