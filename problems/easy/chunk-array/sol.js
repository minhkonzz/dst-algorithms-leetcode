/**
 * Time Complexity: O(n^2 / size)
 * Space Complexity: O(n)
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

const chunk = function (arr, size) {
  const res = [];
  while (arr.length != 0) {
    res.push(arr.splice(0, size));
  }
  return res;
};

console.log(chunk([1,2,3,4,5], 1)) // [[1],[2],[3],[4],[5]]
console.log(chunk([1,9,6,3,2], 3)) // [[1,9,6],[3,2]]
