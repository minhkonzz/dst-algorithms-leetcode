/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArrayByParity = function (nums) {
  let l = 0, r = nums.length - 1;
  while (true) {
    while (nums[l] % 2 == 0) ++l;
    while (r > 0 && nums[r] % 2 != 0) --r;
    if (l >= r) break;
    [nums[l], nums[r]] = [nums[r], nums[l]];
  }
  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1]
console.log(sortArrayByParity([0, 2])); // [0,2]
