/**
 * @param {number[]} nums
 * @return {string[]}
 */

const summaryRanges = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; ++i) {
    let l = nums[i];
    while (i + 1 < nums.length && nums[i + 1] - nums[i] == 1) ++i;
    let r = nums[i];
    res.push((l == r && `${l}`) || `${l}->${r}`);
  }
  return res;
};

console.log(summaryRanges([0,2,3,4,6,8,9])) // ["0","2->4","6","8->9"]
