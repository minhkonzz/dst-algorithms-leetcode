/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */

const transformArray = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    nums[i] = nums[i] % 2 == 0 ? 0 : 1;
  }
  let left = 0;
  let right = n - 1;
  while (true) {
    while (nums[right] == 1) --right;
    while (nums[left] == 0) ++left;
    if (left >= right) break;
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
};

console.log(transformArray([4, 3, 2, 1])); // [0,0,1,1]
console.log(transformArray([1, 5, 1, 4, 2])); // [0,0,1,1,1]
