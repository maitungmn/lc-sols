// https://leetcode.com/problems/base-7/description/

/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function(num) {
  // Handle 0 case
  if (num === 0) return "0";
  
  // Store if number is negative
  const isNegative = num < 0;
  // Work with positive number
  num = Math.abs(num);
  
  let result = "";
  
  // Convert to base 7
  while (num > 0) {
      result = (num % 7) + result;
      num = Math.floor(num / 7);
  }
  
  // Add negative sign if original number was negative
  return isNegative ? "-" + result : result;
};