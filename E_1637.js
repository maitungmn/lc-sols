// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/

/**
 * @param {number[][]} points - Array of points where points[i] = [xi, yi]
 * @return {number} - The width of the widest vertical area
 */
function maxWidthOfVerticalArea(points) {
  // Extract x-coordinates and sort them
  const xCoordinates = points.map(point => point[0]).sort((a, b) => a - b);
  
  // Initialize max width
  let maxWidth = 0;
  
  // Compare adjacent x-coordinates to find the maximum gap
  for (let i = 1; i < xCoordinates.length; i++) {
      const width = xCoordinates[i] - xCoordinates[i - 1];
      maxWidth = Math.max(maxWidth, width);
  }
  
  return maxWidth;
}

// Test cases
console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])); // Output: 1
console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])); // Output: 3