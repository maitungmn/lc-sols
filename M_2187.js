// https://leetcode.com/problems/minimum-time-to-complete-trips/description/

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {

  function calculateTrips(givenTime) {
    let trips = 0;
    for (const busTime of time) {
      trips += Math.floor(givenTime / busTime)
    }
    return trips
  }

  let left = 1;
  let right = totalTrips * Math.min(...time)
  while (left < right) {
    let mid = Math.floor((right + left) / 2)
    const possibleTrips = calculateTrips(mid);
    if (possibleTrips >= totalTrips) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};

console.log(minimumTime([1, 2, 3], 5)) // 3