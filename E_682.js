// https://leetcode.com/problems/baseball-game/description/

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const holder = [];
  for (const o of operations) {
    if (!isNaN(o)) {
      holder.push(parseInt(o))
      continue;
    }

    if (o === "C") {
      holder.pop();
      continue;
    }

    if (o === "D") {
      holder.push(holder[holder.length - 1] * 2)
      continue;
    }

    if (o === "+") {
      holder.push(holder[holder.length - 1] + holder[holder.length - 2])
    }
  }

  let total = 0;
  for (const h of holder) {
    total += h
  }

  return total
};

console.log(calPoints(["5", "2", "C", "D", "+"])) // 30
console.log(calPoints(["5","-2","4","C","D","9","+","+"])) // 27