/**
 * @param {number[]} nums
 * @return {number}
 */

const missingNumber = function (nums) {
  const len = nums.length;
  if (len == 1) return nums[0] == 1 ? 0 : 1;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; ++i) {
    if (nums[i + 1] == nums[i] + 1) continue;
    const res = nums[i] + 1;
    return res <= len ? res : 0;
  }
};

console.log(missingNumber([3,0,1])) // 2

// Solution without sorting
const missingNumberWithoutSort = function (nums) {
   const len = nums.length
   const expectedSum = len * (len + 1) / 2 // calculate sum of elements in array [0,..,len]
   const actualSum = nums.reduce((sum, e) => sum + e, 0)
   return expectedSum - actualSum // missing number
}
