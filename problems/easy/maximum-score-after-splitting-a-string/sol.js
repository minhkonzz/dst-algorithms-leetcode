/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {number}
 */

const maxScore = function (s) {
  const n = s.length;
  const sn = +s;

  if (sn == 0) return n - 1; // all characters are "0"

  let totalOnes = 0;
  for (const char of s) {
    if (char == 1) ++totalOnes;
  }

  if (s.length == totalOnes) return n - 1; // all characters are "1"

  const totalZeros = n - totalOnes;
  let allZerosStr = s.slice(0, totalZeros);
  if (allZerosStr.length == totalZeros && +allZerosStr == 0) return n; // all "0" already on the left and all "1" already on the right

  allZerosStr = s.slice(totalOnes);
  if (allZerosStr.length == totalZeros && +allZerosStr == 0) {
    // all "1" already on the left and all "0" already on the right
    if (totalOnes > totalZeros) return totalOnes - 1;
    return totalZeros - 1;
  }

  let max = (zerosCount = 0);
  let onesCount = totalOnes;
  for (let i = 1; i < n; ++i) {
    if (s[i - 1] == 0) ++zerosCount;
    else --onesCount;
    const totalCount = zerosCount + onesCount;
    if (totalCount > max) max = totalCount;
  }

  return max;
};

console.log(maxScore("010100101000111011001000100001001000011111100100011")); // 33
