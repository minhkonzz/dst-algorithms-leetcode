/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */

const divideArray = function (nums) {
  return nums.reduce((a, v) => (a[v] = !a[v], a), []).every(v => !v);
};

console.log(divideArray([3, 2, 3, 2, 2, 2])); // true
console.log(divideArray([1, 2, 3, 4])); // false