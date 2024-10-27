// https://leetcode.com/problems/merge-sorted-array/description/
/**
 * Merges two sorted arrays nums1 and nums2 in non-decreasing order
 * @param {number[]} nums1 - The first sorted array with extra space at the end
 * @param {number} m - The number of actual elements in nums1
 * @param {number[]} nums2 - The second sorted array
 * @param {number} n - The number of elements in nums2
 * @return {void} Modifies nums1 in-place
 */
function merge(nums1, m, nums2, n) {
  // Initialize pointers for nums1, nums2, and the merged result
  let p1 = m - 1;    // Last actual element in nums1
  let p2 = n - 1;    // Last element in nums2
  let p = m + n - 1; // Last position in merged array
  
  // While there are elements to compare in both arrays
  while (p2 >= 0 && p1 >= 0) {
      // Place the larger element at the end of nums1
      if (nums1[p1] > nums2[p2]) {
          nums1[p] = nums1[p1];
          p1--;
      } else {
          nums1[p] = nums2[p2];
          p2--;
      }
      p--;
  }
  
  // If there are remaining elements in nums2, copy them to nums1
  while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p2--;
      p--;
  }
  
  // Note: No need to handle remaining elements in nums1
  // as they are already in their correct positions
}