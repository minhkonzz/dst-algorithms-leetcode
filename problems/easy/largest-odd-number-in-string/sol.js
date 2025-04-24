/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} num
 * @return {string}
 */

const isOdd = function (c) {
  return parseInt(c) % 2 != 0;
};

const largestOddNumber = function (num) {
  const lastIndex = num.length - 1;
  if (isOdd(num[lastIndex])) return num;
  for (let i = lastIndex; i >= 0; --i) {
    if (isOdd(num[i])) return num.slice(0, i + 1);
  }
  return "";
};
