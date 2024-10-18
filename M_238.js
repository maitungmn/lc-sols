// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);
  
  // Calculate prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
      answer[i] = prefix;
      prefix *= nums[i];
  }
  
  // Calculate suffix products and combine with prefix products
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
      answer[i] *= suffix;
      suffix *= nums[i];
  }
  
  return answer;
}

// console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))