const threeSum = function (nums, target = 0) {
   const res = [];
   if (nums.length < 3) return res;

   nums = nums.sort((a, b) => a - b);
   let k, j;

   for (let i = 0; i < nums.length - 2; ++i) {
      const e = nums[i];
      if (e > target) break;
      if (i > 0 && e == nums[i - 1]) continue;
      j = i + 1;
      k = nums.length - 1;
      while (j < k) {
         const ej = nums[j];
         const ek = nums[k];
         const s = e + ej + ek;
         if (s < target) ++j;
         else if (s > target) --k;
         else {
            res.push([e, ej, ek]);
            while (ej == nums[j + 1]) ++j;
            while (ek == nums[k - 1]) --k;
            ++j;
            --k;
         }
      }
  }
  return res;
};
