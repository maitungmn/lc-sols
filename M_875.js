// https://leetcode.com/problems/koko-eating-bananas/description/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  function countHours(speed) {
    let hours = 0;
    for (const p of piles) {
      hours += Math.ceil(p / speed);
    }
    return hours;
  }

  let left = 0;
  let right = Math.max(...piles);
  let result = right;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const totalH = countHours(mid);

    if (totalH <= h) {
      result = Math.min(result, mid)
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return result
};

// Test cases
const testCases = [
  { piles: [3, 6, 7, 11], h: 8 },
  { piles: [30, 11, 23, 4, 20], h: 5 },
  { piles: [30, 11, 23, 4, 20], h: 6 }
];

// Run test cases
testCases.forEach((test, index) => {
  const result = minEatingSpeed(test.piles, test.h);
  console.log(`Example ${index + 1}:`);
  console.log(`Input: piles = [${test.piles}], h = ${test.h}`);
  console.log(`Output: ${result}\n`);
});