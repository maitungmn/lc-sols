// https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board) {
  // Helper function to check if an array contains unique values
  function isUnique(arr) {
      const filtered = arr.filter(val => val !== '.');
      return new Set(filtered).size === filtered.length;
  }

  // Check rows
  for (let i = 0; i < 9; i++) {
      if (!isUnique(board[i])) {
          return false;
      }
  }

  // Check columns
  for (let j = 0; j < 9; j++) {
      const column = board.map(row => row[j]);
      if (!isUnique(column)) {
          return false;
      }
  }

  // Check 3x3 sub-boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
      for (let boxCol = 0; boxCol < 3; boxCol++) {
          const box = [];
          for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
              for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
                  box.push(board[i][j]);
              }
          }
          if (!isUnique(box)) {
              return false;
          }
      }
  }

  return true;
}

// Test the function with the given examples
const example1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

const example2 = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log("Example 1 is valid:", isValidSudoku(example1)); // true
console.log("Example 2 is valid:", isValidSudoku(example2)); //false