/**
 * @param {number[]} nums
 * @return {boolean}
 */

const isMonotonic = function (nums) {
  return (
    nums.every((e, i) => i == 0 || e <= nums[i - 1]) ||
    nums.every((e, i) => i == 0 || e >= nums[i - 1])
  );
};

console.log(isMonotonic([1,2,2,3])) // true
console.log(isMonotonic([6,5,4,4])) // true
console.log(isMonotonic([1,3,2])) // false
