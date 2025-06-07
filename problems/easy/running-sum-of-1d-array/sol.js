/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function (nums) {
  const res = [nums[0]];
  for (let i = 1; i < nums.length; ++i) {
    res.push(nums[i] + res[i - 1]);
  }
  return res;
};

console.log(runningSum([1,2,3,4])) // [1,3,6,10]
console.log(runningSum([3,1,2,10,1])) // [3,4,6,16,17]
