// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/description/

function sumDigits(num) {
  let sum = 0;
  num = Math.abs(num);

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

// function countBalls(lowLimit, highLimit) {
//   let l = lowLimit;
//   let r = highLimit;

//   const hashmap = new Map()

//   while (l <= r) {
//     const each = sumDigits(l);
//     hashmap.set(each, (hashmap.get(each) || 0) + 1)
//     l++
//   }

//   let max = 0;
//   for (const i of [...hashmap]) {
//     if (i[1] > max) {
//       max = Math.max(max, i[1])
//     }
//   }

//   return max
// };
function countBalls(lowLimit, highLimit) {
  const arr = new Array(46).fill(0) // Max is 10^5 => Max sum of all digits = 5*9 +1 - Need to +1 bc of the array start with index === 0

  let l = lowLimit;
  let r = highLimit;
  while (l <= r) {
    const each = sumDigits(l);
    arr[each] += 1
    if(each === 46) {

      console.log("===l", l)
      console.log("===each", each)
    }
    l++
  }

  console.log("===arr", arr)
  console.log("===arr length", arr.length)
  return Math.max(...arr)
};

// console.log(countBalls(1, 10)) // 2
// console.log(countBalls(5, 15)) // 2
// console.log(countBalls(19, 28)) // 2
console.log(countBalls(1, 100000)) // 2