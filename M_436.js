// https://leetcode.com/problems/find-right-interval/description/

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
function findRightInterval(intervals) {
  // Create array of [start, end, index] for each interval
  const points = intervals.map((interval, index) => [...interval, index]);

  // Sort by start times for binary search
  const sortedByStart = [...points].sort((a, b) => a[0] - b[0]);

  // For each interval, find the right interval
  return points.map(([start, end, originalIndex]) => {
    // Binary search to find smallest start >= end
    let left = 0;
    let right = intervals.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const [currentStart, , currentIndex] = sortedByStart[mid];

      if (currentStart >= end) {
        result = currentIndex;
        right = mid - 1;  // Try to find a smaller start value
      } else {
        left = mid + 1;
      }
    }

    return result;
  });
}

// Test cases
console.log(findRightInterval([[1, 2]]));  // [-1]
console.log(findRightInterval([[3, 4], [2, 3], [1, 2]]));  // [-1,0,1]
console.log(findRightInterval([[1, 4], [2, 3], [3, 4]]));  // [-1,2,-1]