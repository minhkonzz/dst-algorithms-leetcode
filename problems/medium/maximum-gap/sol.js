/**
 * @param {number[]} nums
 * @return {number}
 */

const maximumGap = function (nums) {
  const n = nums.length;
  if (n < 2) return 0;
  if (n == 2) return Math.abs(nums[0] - nums[1]);
  const _nums = new Int32Array(nums);
  let maxGap = 0;
  _nums.sort((a, b) => a - b);
  for (let i = 1; i < n; ++i) {
    const gap = _nums[i] - _nums[i - 1];
    if (gap <= maxGap) continue;
    maxGap = gap;
  }
  return maxGap;
};
