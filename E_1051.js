// https://leetcode.com/problems/height-checker/description/

function heightChecker(heights) {
  // Create a copy of heights array and sort it in non-decreasing order
  // This becomes our expected array
  const expected = [...heights].sort((a, b) => a - b);
  
  // Count mismatches between current heights and expected heights
  let mismatchCount = 0;
  
  for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== expected[i]) {
          mismatchCount++;
      }
  }
  
  return mismatchCount;
}

// Test cases
console.log("Test Case 1:");
console.log("Input:", [1,1,4,2,1,3]);
console.log("Output:", heightChecker([1,1,4,2,1,3])); // Should output 3

console.log("\nTest Case 2:");
console.log("Input:", [5,1,2,3,4]);
console.log("Output:", heightChecker([5,1,2,3,4])); // Should output 5

console.log("\nTest Case 3:");
console.log("Input:", [1,2,3,4,5]);
console.log("Output:", heightChecker([1,2,3,4,5])); // Should output 0