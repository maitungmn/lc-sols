// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const spllitedS = [];

  for(const i of s) {
    if(spllitedS.length > 0 && spllitedS[spllitedS.length - 1] === i) {
      spllitedS.pop();
    } else {
      spllitedS.push(i)
    }
  }

  return spllitedS.join("")
};

console.log(removeDuplicates('abbaca')) // 'ca'
console.log(removeDuplicates('azxxzy')) // 'ay'