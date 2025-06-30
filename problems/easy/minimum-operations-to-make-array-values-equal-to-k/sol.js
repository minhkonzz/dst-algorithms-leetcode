/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const minOperations = function (nums, k) {
  const uniques = new Set(nums);
  const min = Math.min(...uniques);
  if (min < k) return -1;
  return min > k ? uniques.size : uniques.size - 1;
};

console.log(minOperations([5, 2, 5, 4, 5], 2)); // 2
console.log(minOperations([2, 1, 2], 2)); // -1
console.log(minOperations([9, 7, 5, 3], 1)); // 4
