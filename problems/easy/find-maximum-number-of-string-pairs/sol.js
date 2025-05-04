/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string[]} words
 * @return {number}
 */

const maximumNumberOfStringPairs = function (words) {
  let count = 0;
  const n = words.length;
  if (n == 1) return count;
  const set = new Set([words[0]]);
  for (let i = 1; i < n; ++i) {
    const word = words[i];
    if (set.has(`${word[1]}${word[0]}`)) ++count;
    else set.add(word);
  }
  return count;
};

console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"])) // 2
console.log(maximumNumberOfStringPairs(["ab","ba","cc"])) // 1
