/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = function(nums) {
   const frequencies = {};
   for (const e of nums) {
      frequencies[e] = (frequencies[e] || 0) + 1;
   }
   return nums.sort((a, b) => frequencies[a] - frequencies[b] || b - a)
};

console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]))