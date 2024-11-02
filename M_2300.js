// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/

function findingItemsAreLargerThanSuccess(sortedPotions, target) {
  let left = 0;
  let right = sortedPotions.length;
  
  // Find the leftmost position where value >= target
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedPotions[mid] >= target) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  
  // Return count of elements >= target
  return sortedPotions.length - left;
}

function successfulPairs(spells, potions, success) {
  // Sort potions in ascending order
  const sortedPotions = potions.slice().sort((a, b) => a - b);
  const cache = new Map();
  const result = [];
  
  for (const spell of spells) {
      // Handle potential floating point division issues
      const target = Math.ceil(success / spell);
      
      // Use cached result if available
      if (!cache.has(target)) {
          cache.set(target, findingItemsAreLargerThanSuccess(sortedPotions, target));
      }
      
      result.push(cache.get(target));
  }
  
  return result;
}

// console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
// console.log(successfulPairs([3,1,2], [8,5,8], 16))
console.log(successfulPairs([15, 39, 38, 35, 33, 25, 31, 12, 40, 27, 29, 16, 22, 24, 7, 36, 29, 34, 24, 9, 11, 35, 21, 3, 33, 10, 9, 27, 35, 17, 14, 3, 35, 35, 39, 23, 35, 14, 31, 7], [25, 19, 30, 37, 14, 30, 38, 22, 38, 38, 26, 33, 34, 23, 40, 28, 15, 29, 36, 39, 39, 37, 32, 38, 8, 17, 39, 20, 4, 39, 39, 7, 30, 35, 29, 23], 317))