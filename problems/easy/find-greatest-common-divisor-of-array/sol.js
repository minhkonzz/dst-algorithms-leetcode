/**
 * Time Complexity: O(n + min);
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const findGCD = function (nums) {
  const [min, max] = [Math.min(...nums), Math.max(...nums)];
  if (max % min == 0) return min;
  const step = min % 2 == 0 && 1 || 2;
  for (let output = min - step; output > 0; output -= step) {
    if (min % output == 0 && max % output == 0) return output;
  }
  return 1;
};

console.log(findGCD([2, 5, 6, 9, 10])); // 2
console.log(findGCD([7, 5, 6, 8, 3])); // 1
console.log(findGCD([3, 3])); // 3
