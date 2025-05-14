/**
 * Time Complexity: O(WORDS_LENGTH * MAX_WORD_LENGTH)
 * Space Complexity: O(ALLOWED_LENGTH)
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

const countConsistentStrings = function (allowed, words) {
  let res = 0;
  const allowedSet = new Set(allowed);
  for (const word of words) {
    let consistent = true;
    for (const char of word) {
      if (!allowedSet.has(char)) {
        consistent = false;
        break;
      }
    }
    if (consistent) ++res;
  }
  return res;
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])) // 2
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])) // 7
