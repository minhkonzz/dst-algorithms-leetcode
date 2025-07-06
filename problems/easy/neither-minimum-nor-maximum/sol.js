/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const findNonMinOrMax = function (nums) {
  let max = 0, min = Infinity;
  for (const e of nums) {
    if (e > max) max = e;
    if (e < min) min = e;
  }
  for (const e of nums) {
    if (e != min && e != max) return e;
  }
  return -1;
};

console.log(findNonMinOrMax([3, 2, 1, 4])); // 3 or 2
console.log(findNonMinOrMax([2, 1, 3])); // 2
console.log(findNonMinOrMax([1, 2])); // -1
