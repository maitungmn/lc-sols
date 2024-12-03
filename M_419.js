// https://leetcode.com/problems/battleships-in-a-board/description/

/**
 * @param {character[][]} board
 * @return {number}
 */
const X = "X";

var countBattleships = function (board) {
  if (!board || board.length === 0) return 0;

  const m = board.length;
  const n = board[0].length;
  let count = 0;

  function isBattleShip(row, col) {
    if (board[row][col] !== X) return false
    if (row > 0 && board[row - 1][col] === X) return false
    if (col > 0 && board[row][col - 1] === X) return false
    return true;
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (isBattleShip(i, j)) {
        count++
      }
    }
  }

  return count
};

console.log(countBattleships([["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]])); // Output: 2
console.log(countBattleships([[".", "."]])); // Output: 0