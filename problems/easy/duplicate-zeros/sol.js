/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const duplicateZeros = function (arr) {
  if (arr.reduce((acc, cur) => acc + cur, 0) == 0) return arr; // all elements are 0
  const notContainZeros = arr.indexOf(0) == -1;
  if (notContainZeros) return arr; // not found element 0

  const len = arr.length;
  const temp = [];
  while (arr.length != 0) temp.push(arr.shift());
  let i = 0;
  while (arr.length < len) {
    arr.push(temp[i]);
    if (arr.length == len) break;
    if (temp[i] == 0) arr.push(0);
    ++i;
  }
  return arr;
};

console.log(duplicateZeros([0, 0, 0, 0, 0, 0, 0]));
