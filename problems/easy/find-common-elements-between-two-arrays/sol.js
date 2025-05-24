/**
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const findIntersectionValues = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);
  let answer1 = 0, answer2 = 0;

  for (const num1 of nums1) {
    if (nums2Set.has(num1)) ++answer1;
  }

  for (const num2 of nums2) {
    if (nums1Set.has(num2)) ++answer2;
  }

  return [answer1, answer2];
};

console.log(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6])) // [3,4]
