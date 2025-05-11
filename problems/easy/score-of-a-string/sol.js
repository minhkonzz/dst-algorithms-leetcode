/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s
 * @return {number}
 */

const scoreOfString = function(s) {
  let score = 0;
  for (let i = 0; i < s.length - 1; ++i) {
    score += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
  }
  return score;
};

console.log(scoreOfString("zaz")) // 50
console.log(scoreOfString("hello")) // 13