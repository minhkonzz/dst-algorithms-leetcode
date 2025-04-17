/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const maximumProduct = function (nums) {
  let min1 = Infinity, min2 = Infinity;
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;

  for (const num of nums) {
    // Find 3 largest number
    if (num > max1) {
      [max1, max2, max3] = [num, max1, max2]
    } else if (num > max2) {
      [max2, max3] = [num, max2]
    } else if (num > max3) {
      max3 = num;
    }

    // Find 2 smallest number
    if (num < min1) {
      [min1, min2] = [num, min1]
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

console.log(maximumProduct([-10, -5, 0, 1, 2])) // 100
