/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = function (nums) {
  if (nums.length == 1) return nums;
  let i = 0, pointer;

  // Iterate until meet the first zero element
  while (nums[i] != 0) {
    if (i == nums.length - 1) return nums;
    ++i;
  }

  if (i == nums.length - 1) return nums;

  // normal use cases
  pointer = i + 1;
  while (true) {
    if (nums[i] == 0 && nums[pointer] != 0) {
      [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
      ++i;
    } 
    else if (nums[i] != 0 && nums[pointer] == 0) ++i;
    if (pointer == nums.length - 1) break;
    ++pointer;
  }
  return nums;
};

console.log(moveZeroes([1,0,4,0,6,7,0,0,12]));
