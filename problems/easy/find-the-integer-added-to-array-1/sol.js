/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
const addedInteger = function(nums1, nums2) {
  return Math.max(...nums2) - Math.max(...nums1);
};

console.log(addedInteger([2,6,4], [9,7,5])) // 3