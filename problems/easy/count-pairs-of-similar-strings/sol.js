/**
 * Time Complexity: O(n * AVG_WORD_LENGTH)
 * Space Complexity: O(n)
 * @param {string[]} words
 * @return {number}
 */

const similarPairs = function (words) {
  const n = words.length;
  const maskCount = new Map();
  let count = 0;
  for (let i = 0; i < n; i++) {
    let mask = 0;
    for (let char of words[i]) {
      const charCode = char.charCodeAt(0) - 97;
      mask |= (1 << charCode);
    }
    if (maskCount.has(mask)) {
      count += maskCount.get(mask);
      maskCount.set(mask, maskCount.get(mask) + 1);
    } else {
      maskCount.set(mask, 1);
    }
  }
  return count;
};

console.log(similarPairs(["aba","aabb","abcd","bac","aabc"])) // 2
console.log(similarPairs(["aabb","ab","ba"])) // 3
console.log(similarPairs(["nba","cba","dba"])) // 0
