/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const minOperations = function (nums, k) {
  return nums.reduce((a, c) => a + c) % k;
};

console.log(minOperations([3, 9, 7], 5)); // 4
console.log(minOperations([4, 1, 3], 4)); // 0
console.log(minOperations([9, 5], 14)); // 0
