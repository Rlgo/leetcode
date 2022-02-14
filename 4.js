/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * {@link https://leetcode.com/submissions/detail/640936863/}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const merge = [...nums1, ...nums2].sort((a, b) => a - b);
  let half = merge.length / 2;
  if (half % 1 === 0)
    return (merge[half] + merge[half - 1]) / 2;
  else {
    half = Math.floor(half);
    return merge[half];
  }
};