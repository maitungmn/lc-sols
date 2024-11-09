// https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/description/

function countTriplets(nums) {
  let ans = new Map(), count = 0;
  for (i of nums)
    for (j of nums)
      ans.set(i & j, [i & j, (ans.get(i & j) || [i & j, 0])[1] + 1])

  for (val of ans)
    for (num of nums)
      if ((val[0] & num) === 0) count += val[1][1];

  return count;
}

// Test cases
console.log(countTriplets([2, 1, 3])); // Output: 12
console.log(countTriplets([0, 0, 0])); // Output: 27