// https://leetcode.com/problems/interval-list-intersections/description/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
function intervalIntersection(firstList, secondList) {
  const result = [];
  let i = 0; // pointer for firstList
  let j = 0; // pointer for secondList
  
  while (i < firstList.length && j < secondList.length) {
      // Get the intervals we're currently comparing
      const [start1, end1] = firstList[i];
      const [start2, end2] = secondList[j];
      
      // Find the intersection if it exists
      // The start of intersection is the maximum of both starts
      // The end of intersection is the minimum of both ends
      const intersectionStart = Math.max(start1, start2);
      const intersectionEnd = Math.min(end1, end2);
      
      // If there is a valid intersection (start <= end), add it to result
      if (intersectionStart <= intersectionEnd) {
          result.push([intersectionStart, intersectionEnd]);
      }
      
      // Move the pointer of the interval that ends first
      // This is because the interval that ends later might still intersect
      // with the next interval from the other list
      if (end1 < end2) {
          i++;
      } else {
          j++;
      }
  }
  
  return result;
}

// Test cases
const test1FirstList = [[0,2],[5,10],[13,23],[24,25]];
const test1SecondList = [[1,5],[8,12],[15,24],[25,26]];
console.log(intervalIntersection(test1FirstList, test1SecondList));
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

const test2FirstList = [[1,3],[5,9]];
const test2SecondList = [];
console.log(intervalIntersection(test2FirstList, test2SecondList));
// Output: []