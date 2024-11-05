// https://leetcode.com/problems/find-lucky-integer-in-an-array/description/

function findLucky(arr) {
  const hashmap = new Map()
  arr.forEach(num => {
    hashmap.set(num, (hashmap.get(num) ?? 0) + 1)
})

let luckyNum = -1

hashmap.forEach((val, key) => {
    if (key === val) {
        luckyNum = Math.max(luckyNum, val)
    }
})

return luckyNum
}

// console.log(findLucky([2, 2, 3, 4])) //2
// console.log(findLucky([1, 2, 2, 3, 3, 3]))//3
// console.log(findLucky([2, 2, 2, 3, 3]))//-1
console.log(findLucky([19,12,11,14,18,8,6,6,13,9,8,3,10,10,1,10,5,12,13,13,9]))//1