/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const maximumPossibleSize = function(nums) {
  let min = nums[0], res = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < min) continue;    
    ++res;
    min = nums[i];
  }
  return res;
};

console.log(maximumPossibleSize([4,2,5,3,5])) // 3
console.log(maximumPossibleSize([10,43,43,17,36,44,35,28])) // 4