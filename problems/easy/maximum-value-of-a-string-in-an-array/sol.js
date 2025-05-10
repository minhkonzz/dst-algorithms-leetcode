/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string[]} strs
 * @return {number}
 */

const maximumValue = function (strs) {
  let max = 0;
  for (const s of strs) {
    const num = +s;
    const value = isNaN(num) ? s.length : num;
    if (value > max) max = value;
  }
  return max;
};

console.log(maximumValue(["alic3","bob","3","4","00000"])) // 5
console.log(maximumValue(["1","01","001","0001"])) // 1
