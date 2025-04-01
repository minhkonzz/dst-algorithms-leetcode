/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const subarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, 1); // prefix sum is 0

  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    const complement = sum - k;
    if (map.has(complement)) {
      count += map.get(complement);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};

console.log(subarraySum([1, 2, 3], 3)); // 2
