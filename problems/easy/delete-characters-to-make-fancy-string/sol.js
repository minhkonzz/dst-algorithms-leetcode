/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {string}
 */

const makeFancyString = function (s) {
  const ns = s.length;
  if (ns < 3) return s;
  let res = s[0] + "", count = 0;
  for (let i = 1; i < ns; ++i) {
    count = s[i] == s[i - 1] ? count + 1 : 0;
    if (count < 2) res += s[i];
  }
  return res;
};

console.log(makeFancyString("leeetcode")) // leetcode
console.log(makeFancyString("aaabaaaa")) // aabaa
