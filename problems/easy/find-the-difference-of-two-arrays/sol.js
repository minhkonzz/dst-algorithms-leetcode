/**
 * Time Complexity: O(nums1_length + nums2_length)
 * Space Complexity: O(nums1_length + nums2_length)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

const findDifference = function (nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  return [
    [...s1].filter((num) => !s2.has(num)),
    [...s2].filter((num) => !s1.has(num)),
  ];
};

console.log(findDifference([1, 2, 3], [2, 4, 6])) // [[1, 3], [4, 6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])) // [[3], []]