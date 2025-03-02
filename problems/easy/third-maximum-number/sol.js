/**
 * Without Sorting Solution
 * Time Comlexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const thirdMax = function (nums) {
  let first = nums[0], second = -Infinity, third = -Infinity;

  for (let i = 1; i < nums.length; ++i) {
    const e = nums[i]
    if (e > first) 
      [third, second, first] = [second, first, e];
    else if (e > second && e < first) 
      [third, second] = [second, e];
    else if (e > third && e < second) 
      third = e;
  }

  return third !== -Infinity ? third : first;
};
