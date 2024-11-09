// https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/

function getXORSum(arr1, arr2) {
  // Calculate XOR sum of first array
  const xorSum1 = arr1.reduce((acc, curr) => acc ^ curr, 0);
  
  // Calculate XOR sum of second array
  const xorSum2 = arr2.reduce((acc, curr) => acc ^ curr, 0);
  
  // Return AND of both XOR sums
  return xorSum1 & xorSum2;
}

console.log(getXORSum([12], [4]))