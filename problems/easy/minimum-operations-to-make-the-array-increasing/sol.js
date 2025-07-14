/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const minOperations = function (nums) {
  let res = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) continue;
    const opCount = nums[i - 1] - nums[i] + 1;
    res += opCount;
    nums[i] += opCount;
  }
  return res;
};

console.log(minOperations([1, 1, 1])); // 3
console.log(minOperations([8])); // 0
console.log(minOperations([1, 5, 2, 4, 1])); // 14
