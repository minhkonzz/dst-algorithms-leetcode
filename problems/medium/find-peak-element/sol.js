/**
 * Time Complexity: O(logN)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let peakIndex = -1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (mid == nums.length - 1 || nums[mid] > nums[mid + 1]) {
      peakIndex = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return peakIndex;
};

console.log(findPeakElement([1,2,1,3,5,6,4])) // 5
