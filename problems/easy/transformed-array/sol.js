/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */

const constructTransformedArray = function (nums) {
  const n = nums.length;
  const res = [];
  for (let i = 0; i < n; ++i) {
    const newValueIndex = i + nums[i];
    if (newValueIndex > -n && newValueIndex < n) {
      res[i] = nums.at(newValueIndex);
      continue;
    }
    res[i] = nums.at(newValueIndex % n);
  }
  return res;
};

console.log(constructTransformedArray([3, -2, 1, 1])); // [1,1,1,3]
console.log(constructTransformedArray([-1, 4, -1])); // [-1,-1,4]
