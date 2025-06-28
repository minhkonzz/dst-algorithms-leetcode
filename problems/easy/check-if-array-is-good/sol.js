/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */

const isGood = function(nums) {
  const max = Math.max(...nums);
  if (nums.length != max + 1) return false;
  const map = {};
  for (const e of nums) {
      map[e] = (map[e] || 0) + 1;
  }
  if (map[max] != 2) return false;
  for (let i = 1; i < max; ++i) {
      if (map[i] != 1) return false;
  }
  return true;
};

console.log(isGood([2, 1, 3])) // false
console.log(isGood([1, 3, 3, 2])) // true
console.log(isGood([2, 4, 4, 4])) // false
console.log(isGood([3, 4, 4, 1, 2, 1])) // false
console.log(isGood([1, 1])) // true
console.log(isGood([9, 9])) // false