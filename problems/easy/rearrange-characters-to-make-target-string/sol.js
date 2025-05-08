/**
 * Time Complexity: O(S_LENGTH + TARGET_LENGTH)
 * Space Complexity: O(S_LENGTH + TARGET_LENGTH)
 * @param {string} s
 * @param {string} target
 * @return {number}
 */

const rearrangeCharacters = function (s, target) {
  const targetMap = new Map();
  const sMap = new Map();
  for (const char of target) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }
  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }
  let res = Infinity;
  for (const [k, v] of targetMap) {
    if (!sMap.has(k)) return 0;
    const sv = sMap.get(k);
    const dv = Math.floor(sv / v);
    if (dv == 0) return 0;
    res = Math.min(res, dv);
  }
  return res;
};

console.log(rearrangeCharacters("ilovecodingonleetcode", "code")) // 2
console.log(rearrangeCharacters("abcba", "abc")) // 1
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa")); // 1
