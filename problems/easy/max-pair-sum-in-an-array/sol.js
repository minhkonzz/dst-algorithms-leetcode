/**
 * Time Complexity: O(nlogm)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */

function getLargestDigit(num) {
  maxDigit = 0;
  while (num > 0) {
    maxDigit = Math.max(maxDigit, num % 10);
    num = Math.floor(num / 10);
  }
  return maxDigit;
}

const maxSum = function (nums) {
  let numMap = new Map();
  let maxSum = -1;
  for (let num of nums) {
    const digit = getLargestDigit(num);
    if (numMap.has(digit)) {
      const prev = numMap.get(digit);
      maxSum = Math.max(maxSum, prev + num);
      numMap.set(digit, Math.max(prev, num));
    } else {
      numMap.set(digit, num);
    }
  }
  return maxSum;
};

console.log(maxSum([112, 131, 411])); // -1
console.log(maxSum([2536, 1613, 3366, 162])); // 5902
console.log(maxSum([51, 71, 17, 24, 42])); // 88
