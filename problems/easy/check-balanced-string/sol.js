/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} num
 * @return {boolean}
 */

const isBalanced = function (num) {
  let sum = 0;
  for (let i = 0; i < num.length; ++i) {
    const digit = +num[i];
    if (i % 2 == 0) sum += digit;
    else sum -= digit;
  }
  return sum == 0;
};

console.log(isBalanced("1234")) // false
console.log(isBalanced("24123")) // true
