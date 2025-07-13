/**
 * Time Complexity: O(n * k) where k is digits count of max value
 * Space Complexity: O(1)
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const selfDividingNumbers = function (left, right) {
  const res = [];
  for (let e = left; e <= right; ++e) {
    let num = e;
    let valid = true;
    while (num != 0) {
      const pd = num % 10;
      if (e % pd != 0) {
        valid = false;
        break;
      }
      num = (num - pd) / 10;
    }
    if (valid) res.push(e);
  }
  return res;
};

console.log(selfDividingNumbers(1, 22)); // [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)); // [48,55,66,77]
