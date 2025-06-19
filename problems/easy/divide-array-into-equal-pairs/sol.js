/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */

const divideArray = function (nums) {
  let map = {};
  for (const e of nums) {
    map[e] = (map[e] || 0) + 1;
  }
  for (const e of Object.values(map)) {
    if (e % 2 != 0) return false;
  }
  return true;
};

console.log(divideArray([3, 2, 3, 2, 2, 2])); // true
console.log(divideArray([1, 2, 3, 4])); // false
