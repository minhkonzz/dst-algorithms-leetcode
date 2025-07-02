/**
 * Time Complexity: O(nums1_length + nums2_length)
 * Space Complexity: O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const getCommon = function (nums1, nums2) {
  let i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] == nums2[j]) return nums1[i];
    if (nums1[i] < nums2[j]) ++i;
    else ++j;
  }
  return -1;
};

console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5])); // 2
