/**
 * Time Complexity: O(n)
 * Space Complexity: O(n) - Created a new string that doubled length of s
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

const rotateString = function (s, goal) {
  if (s == goal) return true; // always true even shifting or not
  if (s.length != goal.length) return false;
  return (s + s).split(goal).join("") == s;
};

console.log(rotateString("abcde", "cdeab")) // true
console.log(rotateString("abcde", "abced")) // false
console.log(rotateString("bbbacddceeb", "ceebbbbacdd")) // true