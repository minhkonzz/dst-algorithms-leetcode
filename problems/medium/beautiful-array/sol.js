/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number} n
 * @return {number[]}
 */

const beautifulArray = function (n) {
  let arr = [1];
  while (arr.length < n) {
    let tmp = [];
    for (const e of arr) {
      const odd = e * 2 - 1;
      if (odd <= n) tmp.push(odd);
    }
    for (const e of arr) {
      const even = e * 2;
      if (even <= n) tmp.push(even);
    } 
    arr = tmp;
  }
  return arr;
};

console.log(beautifulArray(4)) // [2,1,4,3]
console.log(beautifulArray(5)) // [3,1,2,5,4]
