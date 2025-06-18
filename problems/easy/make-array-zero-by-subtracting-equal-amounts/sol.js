/**
 * Time Complexity: O(n)
 * Space Complexity: 
 * @param {number[]} nums
 * @return {number}
 */

const minimumOperations = function(nums) {
  const uniques = new Set(nums);
  const size = uniques.size;
  if (uniques.has(0)) return size - 1;
  return size;
};

console.log(minimumOperations([1,5,0,3,5])) // 3
console.log(minimumOperations([1])) // 1
console.log(minimumOperations([0])) // 0