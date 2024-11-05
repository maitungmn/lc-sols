// https://leetcode.com/problems/jewels-and-stones/description/

function numJewelsInStones(jewels, stones) {
    const jwSet = new Set(jewels.split(''))
    let res = 0;
    for(const i of stones) {
      if(jwSet.has(i)) {
        res++
      }
    }

    return res
};

console.log(numJewelsInStones("aA", "aAAbbbb")) // 3