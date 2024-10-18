// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

function maxProfit(prices) {
  if (prices.length < 2) return 0;

  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
          maxProfit += prices[i] - prices[i - 1];
      }
  }

  return maxProfit;
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected output: 7
console.log(maxProfit([1,2,3,4,5]));   // Expected output: 4
console.log(maxProfit([7,6,4,3,1]));   // Expected output: 0