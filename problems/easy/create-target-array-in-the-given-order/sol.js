/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

const createTargetArray = function (nums, index) {
  const res = [];
  for (let i in nums) {
    res.splice(index[i], 0, nums[i]);
  }
  return res;
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1])) // [0,4,1,3,2]
console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0])) // [0,1,2,3,4]
