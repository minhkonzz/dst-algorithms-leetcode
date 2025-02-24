/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const len = nums.length;
  let current = nums[0];
  if (len < 3) return current;
  let count = 1;
  const minAppearsCount = Math.ceil(len / 2);
  for (let i = 1; i < len; ++i) {
    if (count == minAppearsCount) return current;
    if (nums[i] == current) ++count;
    else if (count == 0) current = nums[i];
    else --count;
  }
  return current;
};

console.log(majorityElement([2,2,1,1,1,2,2])) // Expected 2
