/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */

const findLHS = function (nums) {
  const len = nums.length;
  
  /* === Edge cases === */
  if (
    !len ||
    len == 1 ||
    nums.reduce((acc, cur) => acc + cur, 0) == nums[0] * len // all elements in the array are the same
  ) return 0;

  if (len == 2) return Math.abs(nums[0] - nums[1]) == 1 ? len : 0;
  /* ================== */
  const map = {};
  let max = 0;
  for (const e of nums) {
    map[e] = (map[e] || 0) + 1;
    if (map[e - 1]) max = Math.max(max, map[e] + map[e - 1]);
    if (map[e + 1]) max = Math.max(max, map[e] + map[e + 1]);
  }
  return max;
};

console.log(findLHS([1, 2, 2, 2, 3, 4, 0, 0, 0, 0, 1]));
