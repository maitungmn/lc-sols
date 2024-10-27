// https://leetcode.com/problems/k-th-symbol-in-grammar/
/**
 * Finds the kth symbol in the nth row of the grammar table
 * @param {number} n - row number (1-indexed)
 * @param {number} k - position to find (1-indexed)
 * @returns {number} - the symbol (0 or 1) at the specified position
 */
function kthGrammarSymbol(n, k) {
  // Base case
  if (n === 1) return 0;
  
  // Key insight: Each row is double the length of the previous row
  // and the second half is the complement of the first half
  
  // Find the length of the previous row
  const prevLength = Math.pow(2, n - 2);
  
  // If k is in the first half, recursively check the same position in previous row
  if (k <= prevLength) {
      return kthGrammarSymbol(n - 1, k);
  }
  // If k is in the second half, recursively check the corresponding position
  // in the first half of previous row and flip the result
  else {
      return 1 - kthGrammarSymbol(n - 1, k - prevLength);
  }
}

// Helper function to generate full row (for visualization)
function generateRow(n) {
  if (n === 1) return "0";
  
  const prevRow = generateRow(n - 1);
  let newRow = "";
  
  for (let char of prevRow) {
      if (char === "0") newRow += "01";
      else newRow += "10";
  }
  
  return newRow;
}

// Test cases
console.log("Example 1:");
console.log("Input: n = 1, k = 1");
console.log("Output:", kthGrammarSymbol(1, 1));
console.log("Row 1:", generateRow(1));

console.log("\nExample 2:");
console.log("Input: n = 2, k = 1");
console.log("Output:", kthGrammarSymbol(2, 1));
console.log("Row 1:", generateRow(1));
console.log("Row 2:", generateRow(2));

console.log("\nExample 3:");
console.log("Input: n = 2, k = 2");
console.log("Output:", kthGrammarSymbol(2, 2));
console.log("Row 1:", generateRow(1));
console.log("Row 2:", generateRow(2));