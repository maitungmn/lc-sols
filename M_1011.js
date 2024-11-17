// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {

  function canShipWithinDays(capacity) {
    let currentDay = 1;
    let currentLoad = 0;
    for (const w of weights) {
      if (w > capacity) return false

      if (currentLoad + w > capacity) {
        currentDay++
        currentLoad = w
      } else {
        currentLoad += w
      }

      if (currentDay > days) return false
    }

    return true
  }

  let left = Math.max(...weights);
  let right = weights.reduce((sum, w) => sum += w, 0)

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (canShipWithinDays(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};

// Test cases
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3)); // 6
console.log(shipWithinDays([1, 2, 3, 1, 1], 4)); // 3