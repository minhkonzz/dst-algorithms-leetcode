/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {number}
 */

const minimizedStringLength = function (s) {
  return new Set(s).size;
};

console.log(minimizedStringLength("baadccab")) // 4
