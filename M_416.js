// https://leetcode.com/problems/partition-equal-subset-sum/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  // Calculate total sum
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  // If sum is odd, we cannot partition into equal subsets
  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;

  // dp[i] represents if sum i can be achieved using the numbers
  const dp = new Array(target + 1).fill(false);
  console.log("===dp: ", dp)
  dp[0] = true;  // Empty subset sums to 0
  
  // For each number, update all possible sums
  for (const num of nums) {
    console.log("===dp-2: ", dp)
    console.log("===target: ", target)
    console.log("===num: ", num)
    // Go backwards to avoid using same number multiple times
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }

    // Early return if we found our target
    if (dp[target]) return true;
  }
  console.log("===dp-3", dp)

  return dp[target];
}

// Test cases
console.log(canPartition([1, 5, 11, 5]));  // true
// console.log(canPartition([1, 2, 3, 5]));   // false