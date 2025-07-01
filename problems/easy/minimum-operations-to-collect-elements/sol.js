/**
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const minOperations = function (nums, k) {
  const collection = new Set();
  let count = 0;
  for (let i = nums.length - 1; i >= 0; --i) {
    if (nums[i] <= k) {
      collection.add(nums[i]);
    }
    ++count;
    if (collection.size == k) break;
  }
  return count;
};

console.log(minOperations([3, 1, 5, 4, 2], 2)); // 2
console.log(minOperations([3, 1, 5, 4, 2], 5)); // 5
console.log(minOperations([3, 2, 5, 3, 1], 3)); // 4
