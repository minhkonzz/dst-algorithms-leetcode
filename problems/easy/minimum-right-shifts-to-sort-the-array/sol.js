/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const minimumRightShifts = function (nums) {
  const n = nums.length;
  let i = 1;
  while (i < n && nums[i] > nums[i - 1]) ++i;
  let res = 0;
  for (let j = i; j < n; ++j) {
    if (nums[j] > nums[0] || nums[j] > nums[j + 1]) return -1;
    ++res;
  }
  return res;
};

console.log(minimumRightShifts([3, 4, 5, 1, 2])); // 2
console.log(minimumRightShifts([1, 3, 5])); // 0
console.log(minimumRightShifts([2, 1, 4])); // -1
