/**
 * Time Complexity: O(SUM(WORD_LENGTH) + SEPARATOR_COUNT * SEPARATOR_LENGTH)
 * Space Complexity: O(SUM(WORD_LENGTH))
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */

const splitWordsBySeparator = function (words, separator) {
  const res = [];
  for (const word of words) {
    const splitWords = word.split(separator);
    for (const splitWord of splitWords) {
      if (splitWord) {
        res.push(splitWord);
      }
    }
  }
  return res;
};

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], ".")); // ["one","two","three","four","five","six"]
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$")); // ["easy","problem"]
console.log(splitWordsBySeparator(["|||"], "|")); // []
