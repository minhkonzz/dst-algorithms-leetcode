"use strict"

/**
 * input: nums = [1,2,0] => output: 3
 * input: nums = [3,4,-1,1] => output: 2
 * input: nums = [7,8,9,11,12] => output: 1
 * prequisites: O(n) time & O(1) auxiliary space
 */

function firstMissingPositive(nums) {
   let i = 0;
   const len = nums.length;
   while (i < len) {
      const idx = nums[i] - 1;
      if (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[idx]) 
         [nums[i], nums[idx]] = [nums[idx], nums[i]];
      else 
         ++i;
   }

   for (let i = 0; i < len; ++i) {
      if (nums[i] !== i + 1) return i + 1;
   }

   return nums.length + 1;
};

console.log(firstMissingPositive([-2, 5, 1, 3, 4]));