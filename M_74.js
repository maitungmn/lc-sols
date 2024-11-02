// https://leetcode.com/problems/search-a-2d-matrix/description/

function bnrSearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let mid = 0;
  while (l <= r) {
    mid = Math.floor((r + l) / 2);
    if (arr[mid] === target) {
      return true
    }
    if (arr[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return false
}

function searchMatrix(matrix, target) {
  if (matrix.length === 1) {
    return bnrSearch(matrix[0], target)
  }

  let res = false;
  let i = 0;
  while (i < matrix.length) {
    if (matrix[i][matrix[i].length - 1] >= target) {
      res = bnrSearch(matrix[i], target);
      break;
    }
    i++;
  }

  return res
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 35))