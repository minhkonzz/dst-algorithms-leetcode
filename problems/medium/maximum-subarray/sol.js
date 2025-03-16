/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArrayHelper(nums, l, r) {
  // Điều kiện dừng: nếu chỉ có 1 phần tử
  if (l == r) {
    return nums[l];
  }

  const mid = Math.floor((l + r) / 2);
  const leftMax = maxSubArrayHelper(nums, l, mid);
  const rightMax = maxSubArrayHelper(nums, mid + 1, r);

  const crossMax = maxCrossingSum(nums, l, mid, r);
  return Math.max(leftMax, rightMax, crossMax);
}

function maxCrossingSum(nums, l, mid, r) {
  // Tính tổng lớn nhất bên trái từ mid về left
  let leftSum = -Infinity;
  let currentSum = 0;
  for (let i = mid; i >= l; --i) {
    currentSum += nums[i];
    leftSum = Math.max(leftSum, currentSum);
  }

  // Tính tổng lớn nhất bên phải từ mid+1 về right
  let rightSum = -Infinity;
  currentSum = 0;
  for (let i = mid + 1; i <= r; ++i) {
    currentSum += nums[i];
    rightSum = Math.max(rightSum, currentSum);
  }

  // Tổng vắt qua giữa là tổng của hai phần lớn nhất
  return leftSum + rightSum;
}

const maxSubArray = function (nums) {
  return maxSubArrayHelper(nums, 0, nums.length - 1);
};
