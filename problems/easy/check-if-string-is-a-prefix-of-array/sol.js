/**
 * Time Complexity: O(n)
 * Space Complexity: O(MAX_WORD_LENGTH)
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */

const isPrefixString = function (s, words) {
  if (!s.startsWith(words[0])) return false;
  const sn = s.length;
  let count = 0;
  for (const word of words) {
    const len = word.length;
    const substr = s.substring(count, count + len);
    count += len;
    if (substr != word && count <= sn) return false;
    if (substr == word && count >= sn) return true;
  }
  return false;
};

console.log(isPrefixString("iloveleetcode", ["i","love","leetcode","apples"])) // true
console.log(isPrefixString("ccccccccc", ["c","cc"])) // false
