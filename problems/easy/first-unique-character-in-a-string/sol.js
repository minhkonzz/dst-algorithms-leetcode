/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = function (s) {
  for (let i = 0; i < s.length; ++i) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) return i;
  }
  return -1;
};

console.log(firstUniqChar("leetcode")) // 0
console.log(firstUniqChar("loveleetcode")); // 2
