/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {number}
 */

const secondHighest = function (s) {
  let S = new Set();
  let s1 = s.split("");
  for (let num of s1) {
    if (!isNaN(num)) S.add(+num);
  }
  res = [...S].sort((a, b) => b - a);
  return res.length > 1 ? res[1] : -1;
};

console.log(secondHighest("dfa12321afd")); // 2
