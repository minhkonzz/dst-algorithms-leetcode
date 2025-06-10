/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */

const isArraySpecial = function(nums) {
  for (let i = 1; i < nums.length; ++i) {
      const adjacentSum = nums[i] + nums[i - 1];
      if (adjacentSum % 2 == 0) return false;
  }
  return true;
};

console.log(isArraySpecial([4,3,1,6])) // false
console.log(isArraySpecial([1,2,7,4,5,10,11,100])) // true