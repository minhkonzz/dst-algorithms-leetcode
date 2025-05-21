/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */

const isPossibleToSplit = function (nums) {
  const freq = {};
  for (const num of nums) {
    const current = freq[num] ?? 0;
    if (current == 2) return false;
    freq[num] = current + 1;
  }
  return true;
};

console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4])) // true
console.log(isPossibleToSplit([1, 1, 1, 1])) // false
