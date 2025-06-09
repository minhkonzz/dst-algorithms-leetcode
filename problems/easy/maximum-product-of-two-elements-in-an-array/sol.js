/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const maxProduct = function (nums) {
  let secondMax = 0, firstMax = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    const e = nums[i];
    if (e >= firstMax) {
      [secondMax, firstMax] = [firstMax, e];
      continue;
    }
    if (e > secondMax) {
      secondMax = e;
    }
  }
  return (firstMax - 1) * (secondMax - 1);
};

console.log(maxProduct([3, 4, 5, 2])) // 12
console.log(maxProduct([1, 5, 4, 5])) // 16
console.log(maxProduct([3, 7])) // 12