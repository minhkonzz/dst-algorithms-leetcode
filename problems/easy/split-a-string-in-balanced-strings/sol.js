/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s
 * @return {number}
 */

const balancedStringSplit = function (s) {
  let c = 0;
  let res = 0;
  for (const char of s) {
    if (char == "R") ++c;
    else --c;
    if (c == 0) ++res;
  }
  return res;
};

console.log(balancedStringSplit("RLRRLLRLRL")) // 4
console.log(balancedStringSplit("RLRRRLLRLL")) // 2
