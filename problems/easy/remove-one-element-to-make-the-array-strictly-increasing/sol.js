/**
 * Time Complexity: o(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */

const canBeIncreasing = function (nums) {
  let removes = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] <= nums[i - 1]) {
      ++removes;
      if (i > 1 && nums[i] <= nums[i - 2]) nums[i] = nums[i - 1];
    }
  }
  return removes <= 1;
};

console.log(canBeIncreasing([1, 2, 10, 5, 7])); // true
console.log(canBeIncreasing([2, 3, 1, 2])); // false
console.log(canBeIncreasing([1, 1])); // true
console.log(canBeIncreasing([1, 1, 1])); // false
console.log(canBeIncreasing([105, 924, 32, 968])); // true
console.log(canBeIncreasing([89, 384, 691, 680, 111, 756])); // false
