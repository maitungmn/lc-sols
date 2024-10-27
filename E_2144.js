//https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/description/

/**
 * @param {number[]} cost
 * @return {number}
 */
function minimumCost(cost) {
  // Sort the array in descending order to always try to get the cheapest candies for free
  cost.sort((a, b) => b - a);
  
  let totalCost = 0;
  let i = 0;
  
  // Process candies in groups of 3 (buy 2, get 1 free)
  while (i < cost.length) {
      // Add cost of first candy in group if it exists
      if (i < cost.length) {
          totalCost += cost[i];
          i++;
      }
      
      // Add cost of second candy in group if it exists
      if (i < cost.length) {
          totalCost += cost[i];
          i++;
      }
      
      // Skip the third candy (it's free) if it exists
      if (i < cost.length) {
          i++;
      }
  }
  
  return totalCost;
}

// Test cases
console.log(minimumCost([1,2,3])); // Output: 5
console.log(minimumCost([6,5,7,9,2,2])); // Output: 23
console.log(minimumCost([5,5])); // Output: 10