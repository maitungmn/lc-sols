// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/

var minDays = function (arr, m, k) {
  let val = m * k;
  let n = arr.length; // Size of the array
  if (val > n) return -1; // Impossible case
  // Find maximum and minimum
  let mini = Infinity, maxi = -Infinity;
  for (let i = 0; i < n; i++) {
    mini = Math.min(mini, arr[i]);
    maxi = Math.max(maxi, arr[i]);
  }

  // Apply binary search
  let low = mini, high = maxi;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possible(arr, mid, m, k)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

function possible(arr, day, m, k) {
  let n = arr.length; // Size of the array
  let cnt = 0;
  let noOfB = 0;
  // Count the number of bouquets
  for (let i = 0; i < n; i++) {
    if (arr[i] <= day) {
      cnt++;
    } else {
      noOfB += Math.floor(cnt / k);
      cnt = 0;
    }
  }
  noOfB += Math.floor(cnt / k);
  return noOfB >= m;
}