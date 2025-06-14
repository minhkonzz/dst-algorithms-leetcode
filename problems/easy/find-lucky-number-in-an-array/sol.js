/**
 * Time Complexity: O(n + max(arr))
 * Space Complexity: O(max(arr))
 * @param {number[]} arr
 * @return {number}
 */

const findLucky = function (arr) {
  const freq = [];
  for (const e of arr) {
    freq[e] = (freq[e] || 0) + 1;
  }
  for (let i = freq.length - 1; i >= 0; --i) {
    if (freq[i] == i) return i;
  }
  return -1;
};

console.log(findLucky([1, 2, 2, 3, 3, 3])); // 3
console.log(findLucky([2, 2, 2, 3, 3])); // -1
