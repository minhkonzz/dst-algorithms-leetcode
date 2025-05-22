/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const findMiddleIndex = function (nums) {
  const n = nums.length;
  if (n == 1) return 0;
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftMostSum = 0;
  for (let i = 0; i < n; ++i) {
    leftMostSum += nums[i - 1] || 0;
    if (sum - leftMostSum - nums[i] == leftMostSum) return i;
  }
  return -1;
};

console.log(findMiddleIndex([4, 2, 1, -3])) // 0
console.log(findMiddleIndex([1, -1, 4])) // 2
console.log(findMiddleIndex([0, 0, 0, 0])) // 0
console.log(findMiddleIndex([2, 3, -1, 8, 4])) // 3
