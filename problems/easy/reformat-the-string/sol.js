/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {string}
 */

const reformat = function (s) {
  const ns = s.length;
  if (ns == 1) return s;
  const nums = [];
  const alphas = [];
  for (const char of s) {
    const arr = (isNaN(+char) && alphas) || nums;
    arr.push(char);
  }
  const [short, long] = alphas.length > nums.length && [nums, alphas] || [alphas, nums];
  if (long.length - short.length > 1) return "";
  let res = "";
  for (let i in long) {
    res += long[i] + (short[i] || "");
  }
  return res;
};

console.log(reformat("a0b1c2")) // "a0b1c2"
console.log(reformat("leetcode")) // ""
