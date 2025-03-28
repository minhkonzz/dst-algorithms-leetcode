/**
 * @param {number[]} nums
 * @return {string}
 */

const largestNumber = function (nums) {
  const strs = nums.map(String);
  strs.sort((a, b) => b + a - (a + b));
  return strs[0] == "0" ? "0" : strs.join("");
};
