// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

/**
 * @param {number[]} nums - Array of numbers
 * @return {number[]} - Array where each element is count of smaller numbers
 */
function smallerNumbersThanCurrent(nums) {
  const count = new Array(101).fill(0);

  nums.forEach(num => count[num]++);

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  return nums.map(num => num === 0 ? 0 : count[num - 1]);
}

// Test cases
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));  // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));    // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));    // [0,0,0,0]