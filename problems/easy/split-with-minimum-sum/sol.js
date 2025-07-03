/**
 * N: number of digits
 * Time Complexity: O(NLogN)
 * Space Complexity: O(N)
 * @param {number} num
 * @return {number}
 */

const splitNum = function (num) {
  const numArr = [];
  while (num != 0) {
    const pd = num % 10;
    numArr.push(pd);
    num = (num - pd) / 10;
  }
  numArr.sort((a, b) => a - b);
  let num1 = numArr[0], num2 = numArr[1];
  for (let i = 2; i < numArr.length; ++i) {
    const e = numArr[i];
    if (i % 2 == 0) {
      num1 = num1 * 10 + e;
    } else {
      num2 = num2 * 10 + e;
    }
  }
  return num1 + num2;
};

console.log(splitNum(4325)) // 59
console.log(splitNum(687)) // 75
