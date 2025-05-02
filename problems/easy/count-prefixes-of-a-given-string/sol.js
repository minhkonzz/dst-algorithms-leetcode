/**
 * Time Complexity: O(n * MAX_WORD_LENGTH)
 * Space Complexity: O(1)
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */

const countPrefixes = function (words, s) {
  let res = 0;
  for (const word of words) {
    if (word[0] != s[0]) continue;
    if (s.indexOf(word) == 0) ++res;
  }
  return res;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc")); // 3 ("a", "ab", "abc")
