/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {string}
 */

const findValidPair = function (s) {
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let i = 0, j = 1;
  while (true) {
    const si = s[i];
    const sj = s[j];
    if (si != sj && freq[si] == si && freq[sj] == sj) return si + sj;
    if (j == s.length - 1) break;
    ++i;
    ++j;
  }
  return "";
};

console.log(findValidPair("2523533")) // "23"
console.log(findValidPair("221")) // "21"
console.log(findValidPair("22")) // ""
