/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const getStartRotatedIndex = function (nums, mid) {
  const e0 = nums[0]
  while (true) {
    if (nums[mid] < e0) {
      --mid;
      if (nums[mid] > e0) return mid;
    } else {
      ++mid;
      if (nums[mid] < e0) return mid - 1;
    }
  }
};

const search = function (nums, target) {
  const len = nums.length;
  if (len == 1) return nums[0] != target ? -1 : 0; // edge case
  let mid = Math.floor(len / 2);
  if (nums[mid] == target) return mid;
  let l = 0;
  if (nums[l] == target) return l;
  let r = len - 1;
  if (nums[r] == target) return r;
  if (nums[0] > nums[len - 1]) {
    // The sorted array had been rotated
    if (target < nums[l] && target > nums[r]) return -1;
    const startRotatedIndex = getStartRotatedIndex(nums, mid);
    if (target == nums[startRotatedIndex]) return startRotatedIndex;
    if (target > nums[startRotatedIndex]) return -1;
    if (target < nums[r]) {
      l = startRotatedIndex + 1;
    } else if (target > nums[l]) {
      r = startRotatedIndex;
    }
  }
  while (l != r) {
    mid = Math.floor((r + l) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] > target) r = mid;
    else l = mid + 1;
  }
  return nums[mid] == target ? mid : -1;
};
