/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */

const minimumOperations = function (nums) {
  const n = nums.length;
  let i = n - 1;
  const set = new Set();
  while (i >= 0) {
    if (set.has(nums[i])) {
      if (i <= 2) return 1;
      break;
    }
    set.add(nums[i]);
    --i;
  }
  return Math.floor(i / 3) + 1;
};

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7])); // 2
console.log(minimumOperations([4, 5, 6, 4, 4])); // 2
console.log(minimumOperations([3, 15, 13, 13, 4, 4])); // 2
console.log(minimumOperations([4, 14, 4, 13])); // 1
