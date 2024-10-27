// https://leetcode.com/problems/squares-of-a-sorted-array/description/

function sortedSquares(nums) {
  const n = nums.length;
  const result = new Array(n);
  let left = 0;
  let right = n - 1;
  let position = n - 1;  // Fill from the end
  
  while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
      
      if (leftSquare > rightSquare) {
          result[position] = leftSquare;
          left++;
      } else {
          result[position] = rightSquare;
          right--;
      }
      position--;
  }
  
  return result;
}

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]