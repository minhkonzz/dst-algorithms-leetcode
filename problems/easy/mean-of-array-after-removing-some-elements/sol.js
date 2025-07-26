/**
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 * @param {number[]} arr
 * @return {number}
 */

const trimMean = function(arr) {
  const sort = arr.sort((a, b) => a - b);
  const pg = Math.floor(arr.length * 0.05);
  const trimmed = sort.slice(pg, sort.length - pg);
  const sum = trimmed.reduce((a, b) => a + b, 0);
  return sum / trimmed.length;
};

console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3])); // 2
console.log(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0])); // 4
console.log(trimMean([6,0,7,0,7,5,6,8,5,2,0,7,2,1,2,3,4,8,5,9,1])) // 4
console.log(trimMean([1,2,3])) // 2
console.log(trimMean([2,1,3])) // 2
console.log(trimMean([6,2,0,0,0,0])) // 3
