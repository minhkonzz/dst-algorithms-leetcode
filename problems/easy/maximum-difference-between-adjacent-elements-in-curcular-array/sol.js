/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const maxAdjacentDistance = function (nums) {
  return nums.reduce(
    (max, num, i) => Math.max(
      max, Math.abs(num - (nums[i + 1] ?? nums[0]))
    ),
  0);
};

console.log(maxAdjacentDistance([1,2,4])) // 3
console.log(maxAdjacentDistance([-5,-10,-5])) // 5