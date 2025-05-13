/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */

const numOfStrings = function (patterns, word) {
  let res = 0;
  for (const pat of patterns) {
    if (word.includes(pat)) ++res;
  }
  return res;
};

const numOfStringsWithReg = function (patterns, word) {
  let res = 0;
  for (const pat of patterns) {
    const reg = new RegExp(pat);
    if (reg.test(word)) ++res;
  }
  return res;
};

console.log(numOfStrings(["a","abc","bc","d"], "abc")) // 3
console.log(numOfStringsWithReg(["a","abc","bc","d"], "abc")) // 3
