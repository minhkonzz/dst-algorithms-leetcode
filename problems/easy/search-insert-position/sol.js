/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
   const len = nums.length;
   const centerIdx = Math.floor(len / 2);
   const [startIdx, endIdx] = target > nums[centerIdx] && [centerIdx, len - 1] || [0, centerIdx];
   if (target <= nums[startIdx]) return startIdx;
   let i = startIdx;
   while (i <= endIdx) {
      if (target <= nums[i]) return i;
      ++i;
   }
   return len;
};

console.log(searchInsert([1, 3, 5], 4));
