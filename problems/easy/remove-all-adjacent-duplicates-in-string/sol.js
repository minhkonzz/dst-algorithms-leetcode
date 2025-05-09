/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {string}
 */

const removeDuplicates = function (s) {
  const res = [s[0]];
  for (let i = 1; i < s.length; ++i) {
    const char = s[i];
    if (res.at(-1) == char) {
      res.pop();
      continue;
    }
    res.push(char);
  }
  return res.join("");
};

console.log(removeDuplicates("azxxzy")) // "ay"
console.log(removeDuplicates("abbaca")) // "ca"
