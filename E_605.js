// https://leetcode.com/problems/can-place-flowers/

function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const emptyLeftPlot = (i === 0) || (flowerbed[i - 1] === 0);
      const emptyRightPlot = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);

      if (emptyLeftPlot && emptyRightPlot) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }
  return count >= n;
}
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)) // true
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)) // true