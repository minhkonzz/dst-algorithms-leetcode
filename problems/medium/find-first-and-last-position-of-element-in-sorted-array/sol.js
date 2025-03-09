/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const res = [-1, -1];
  const len = nums.length;
  if (len == 0) return res;
  if (len == 1 && nums[0] == target) return [0, 0];
  if (len == 2 && nums[0] == target && nums[1] == target) return [0, 1];
  let mid = 0,
    l = 0,
    r = len;
  while (l != r) {
    mid = Math.floor((r + l) / 2);
    if (nums[mid] == target) {
      res[0] = mid;
      break;
    }
    if (nums[mid] > target) {
      r = mid;
      continue;
    }
    if (nums[mid] < target) {
      l = mid + 1;
      continue;
    }
  }
  for (let i = mid; i < r; ++i) {
    if (nums[i + 1] == target) continue;
    res[1] = i;
    break;
  }
  return res;
};
