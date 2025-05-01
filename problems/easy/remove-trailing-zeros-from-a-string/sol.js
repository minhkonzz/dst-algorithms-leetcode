/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} num
 * @return {string}
 */

const removeTrailingZeros = function (num) {
  const startIdx = num.length - 1;
  if (num[startIdx] != "0") return num;
  let i = startIdx;
  while (num[i - 1] == "0" && i >= 0) --i;
  return num.slice(0, i);
};

console.log(removeTrailingZeros("123")) // 123
console.log(removeTrailingZeros("51230100")) // "512301"