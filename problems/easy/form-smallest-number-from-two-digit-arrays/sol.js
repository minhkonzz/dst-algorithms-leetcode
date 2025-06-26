/**
 * Time Complexity: O(nums1_length * nums2_length)
 * Space Complexity: O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const minNumber = function (nums1, nums2) {
  let min = 10;
  for (const num of nums1) {
    if (nums2.includes(num) && num < min) min = num;
  }
  if (min != 10) return min;
  const [min1, min2] = [Math.min(...nums1), Math.min(...nums2)];
  return (min1 < min2 && min1 * 10 + min2) || min2 * 10 + min1;
};

console.log(minNumber([4, 1, 3], [5, 7])); // 15
console.log(minNumber([3, 5, 2, 6], [3, 1, 7])); // 3
