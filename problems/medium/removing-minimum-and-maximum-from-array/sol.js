/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const minimumDeletions = function(nums) {
   const n = nums.length;
   if (n <= 1) return n;
   
   const minVal = Math.min(...nums);
   const maxVal = Math.max(...nums);
   if (minVal === maxVal) return 1;
   
   const idxMin = nums.indexOf(minVal);
   const idxMax = nums.indexOf(maxVal);

   const [a, b] = [Math.min(idxMin, idxMax), Math.max(idxMin, idxMax)];

   return Math.min(
      (a + 1) + (n - b),
      b + 1,
      n - a
   );
};