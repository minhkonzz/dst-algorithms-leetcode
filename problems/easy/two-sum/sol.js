const twoSum = function(nums, target) {
   let i = 0, j = nums.length - 1;
   while (j > i) {
      const sum = nums[i] + nums[j];
      if (sum === target) return [i, j];
      if (j === i + 1) {
         ++i;
         j = nums.length - 1;
         continue;
      }
      --j;
   }
};

console.time('myTimer');
console.log(twoSum([3,2,4], 6));
console.timeEnd("myTimer");