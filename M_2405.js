// https://leetcode.com/problems/optimal-partition-of-string/description/

// function partitionString(s) {
//   let count = 1, set = 0, shift
//   for (let i = 0; i < s.length; i++) {
//     shift = s.charCodeAt(i) - 97
//     if ((set >> shift) & 1) {
//       count++
//       set = 0
//     }

//     set |= 1 << shift
//   }

//   return count
// };

// console.log(partitionString("abacaba")) // 4
// console.log(partitionString("ssssss")) // 6
// console.log(partitionString("cuieokbs")) // 1

// Function to visualize binary representation
function toBinaryString(num) {
  return num.toString(2).padStart(8, '0');
}

// Demo of tracking characters in a set
function demonstrateBitOperations(str) {
  let set = 0;
  console.log("Starting with empty set:", toBinaryString(set));
  
  for(let char of str) {
      const shift = char.charCodeAt(0) - 97;  // 'a'->0, 'b'->1, etc.
      console.log(`\nProcessing '${char}' (shift=${shift}):`);
      
      // Check if character exists
      const check = (set >> shift) & 1;
      console.log(`Checking if '${char}' exists:`);
      console.log(`Current set:       ${toBinaryString(set)}`);
      console.log(`After >> ${shift}:     ${toBinaryString(set >> shift)}`);
      console.log(`After & 1:        ${toBinaryString((set >> shift) & 1)}`);
      console.log(`Character exists: ${check === 1 ? 'YES' : 'NO'}`);
      
      // Add character to set
      const bitToAdd = 1 << shift;
      console.log(`\nAdding '${char}' to set:`);
      console.log(`Current set:      ${toBinaryString(set)}`);
      console.log(`1 << ${shift}:         ${toBinaryString(bitToAdd)}`);
      set |= bitToAdd;
      console.log(`After |=:         ${toBinaryString(set)}`);
  }
  
  return set;
}

// Demo with a sample string
console.log("Demonstration with 'abc':");
const finalSet = demonstrateBitOperations('abc');
console.log("\nFinal set:", toBinaryString(finalSet));