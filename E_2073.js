// https://leetcode.com/problems/time-needed-to-buy-tickets/

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

var timeRequiredToBuy = function (tickets, k) {
  let time = 0;

  // Process one ticket at a time for each person
  for (let i = 0; i < tickets.length; i++) {
    console.log(i)
    // If current position is before or at k
    if (i <= k) {
      // Add time for minimum of (tickets[i], tickets[k])
      time += Math.min(tickets[i], tickets[k]);
    } else {
      // If position is after k, we only count until k's tickets are done
      time += Math.min(tickets[i], tickets[k] - 1);
    }
  }

  return time;
};

console.log(timeRequiredToBuy([2, 3, 2], 2)) // 6
// console.log(timeRequiredToBuy([5, 1, 1, 1], 0)) // 8