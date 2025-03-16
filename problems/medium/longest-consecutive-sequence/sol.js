/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */

const longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  const numsSet = new Set(nums);
  let maxLength = 0;
  for (let e of nums) {
    if (!numsSet.has(e - 1)) {
      let length = 0;
      while (numsSet.has(e++)) ++length;
      maxLength = Math.max(maxLength, length);
    }
  }
  return maxLength;
};
