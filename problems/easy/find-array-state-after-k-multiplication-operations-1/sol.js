/**
 * Time Complexity: O(k * n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */

const getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    const min = Math.min(...nums);
    const idx = nums.indexOf(min);
    nums[idx] = min * multiplier;
  }
  return nums;
};

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2)); // [8,4,6,5,6]
console.log(getFinalState([1, 2], 3, 4)); // [16,8]
