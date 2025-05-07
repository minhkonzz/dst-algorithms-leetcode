/**
 * Both time complexity & space complexity: O(SUM(WORD_LENGTH) + WORDS_LENGTH * SEPARATOR_LENGTH)
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */

const splitWordsBySeparator = function(words, separator) {
  return words.join(separator).split(separator).filter(Boolean)
};

console.log(splitWordsBySeparator(["one.two.three","four.five","six"], ".")) // ["one","two","three","four","five","six"]
console.log(splitWordsBySeparator(["$easy$","$problem$"], "$")) // ["easy","problem"]
console.log(splitWordsBySeparator(["|||"], "|")) // []