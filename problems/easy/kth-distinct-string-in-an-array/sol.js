/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */

const kthDistinct = function (arr, k) {
  const map = {};
  for (const e of arr) {
    map[e] = (map[e] || 0) + 1;
  }
  let count = 0;
  for (const e of arr) {
    if (map[e] == 1) ++count;
    if (count == k) return e;
  }
  return "";
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)); // "a"
console.log(kthDistinct(["aaa", "aa", "a"], 1)); // "aaa"
console.log(kthDistinct(["a", "b", "a"], 3)); // ""
