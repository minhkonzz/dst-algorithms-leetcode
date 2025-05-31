/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

const shuffle = function (nums, n) {
  const res = [];
  for (let i = 0; i < n; ++i) {
    res.push(nums[i], nums[i + n]);
  }
  return res;
};

console.log(shuffle([2,5,1,3,4,7], 3)) // [2,3,5,4,1,7]
console.log(shuffle([1,2,3,4,4,3,2,1], 4)) // [1,4,2,3,3,2,4,1]
