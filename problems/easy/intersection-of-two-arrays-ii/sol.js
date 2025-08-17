/**
 * Time Complexity: O(n + m)
 * Space Complexity: O(min(n, m))
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = function (nums1, nums2) {
  // to handle the case where nums1 is much smaller than nums2
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }

  // count frequency of elements in the smaller array (nums1)
  const freq = {};
  for (const num of nums1) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const res = [];

  // for each element in nums2, check if it exists in frequency map
  for (const num of nums2) {
    if (freq[num] > 0) {
      res.push(num);
      freq[num]--;
    }
  }

  return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
