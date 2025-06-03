/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; ++i) {
    const num = target - nums[i];
    if (map[num] != undefined) return [map[num], i];
    map[nums[i]] = i;
  }
};

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
