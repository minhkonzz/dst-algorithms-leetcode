/**
 * Time Complexity: O(n * m) where m is digits count of largest number
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */

const separateDigits = function (nums) {
  return nums.flatMap(num => num.toString().split('').map(Number))
};

console.log(separateDigits([13, 25, 83, 77])); // [1,3,2,5,8,3,7,7]
console.log(separateDigits([7, 1, 3, 9])); // [7,1,3,9]
