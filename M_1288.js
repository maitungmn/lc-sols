// https://leetcode.com/problems/remove-covered-intervals/description/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  // Sort intervals first by start point (ascending)
  // If start points are equal, sort by end point (descending)
  intervals.sort((a, b) => {
    console.log("a-b", a, b)
    if (a[0] === b[0]) {
      return b[1] - a[1]; // Descending order for end points
    }
    return a[0] - b[0]; // Ascending order for start points
  });
  console.log("===Interval: ", intervals)

  let count = intervals.length; // Start with total count
  let maxEnd = intervals[0][1]; // Keep track of maximum end point seen

  // Check each interval starting from the second one
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    // If current interval is covered by previous interval
    if (end <= maxEnd) {
      count--; // Reduce count as this interval is covered
    } else {
      maxEnd = end; // Update maxEnd if we find a larger end point
    }
  }

  return count;
};

// Test cases
console.log(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]])); // Output: 2
// console.log(removeCoveredIntervals([[1, 4], [2, 3]])); // Output: 1