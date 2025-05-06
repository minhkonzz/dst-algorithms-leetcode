/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {number}
 */

const minLength = function (s) {
  const ns = s.length;
  if (ns == 1) return 1;
  let res = [s[0]];
  for (let i = 1; i < ns; ++i) {
    const char = s[i];
    const sub = res.at(-1) + char;
    if (sub == "AB" || sub == "CD") {
      res.pop();
      continue;
    }
    res.push(char);
  }
  return res.length;
};

console.log(minLength("ABFCACDB")) // 2
console.log(minLength("CCDAABBDCD")) // 0
