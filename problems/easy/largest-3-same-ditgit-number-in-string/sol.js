/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} num
 * @return {string}
 */

const largestGoodInteger = function (num) {
  for (let i = 9; i >= 0; --i) {
    const str = String(i).repeat(3);
    if (num.includes(str)) return str;
  }
  return "";
};

console.log(largestGoodInteger("6777133339")) // "777"
console.log(largestGoodInteger("2300019")) // "000"
