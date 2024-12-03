// https://leetcode.com/problems/surrounded-regions/description/
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;

  for (let j = 0; j < n; j++) {
    dfs(board, 0, j)
    dfs(board, m - 1, j)
  }

  for (let i = 0; i < m; i++) {
    dfs(board, i, 0)
    dfs(board, i, n - 1)
  }

  console.log("===BOARD: ", board);

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === 'O') {
        board[i][j] = "X"
      } else if (board[i][j] === 'S') {
        board[i][j] = "O"
      }
    }
  }
  return board
};

function dfs(board, i, j) {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== "O") {
    return
  }

  board[i][j] = "S";

  dfs(board, i + 1, j);
  dfs(board, i - 1, j);
  dfs(board, i, j + 1);
  dfs(board, i, j - 1);
}