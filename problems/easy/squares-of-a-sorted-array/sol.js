/**
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */

const sortedSquares = function(nums) {
  return nums.map(num => num * num).sort((a, b) => a - b);
};