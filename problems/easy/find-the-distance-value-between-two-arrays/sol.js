/**
 * Time Complexity: O(arr1_length * arr2_length)
 * Space Complexity: O(1)
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

const findTheDistanceValue = function (arr1, arr2, d) {
  let invalid = 0;
  const arr1Len = arr1.length;
  for (let i = 0; i < arr1Len; ++i) {
    for (let j = 0; j < arr2.length; ++j) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        ++invalid;
        break;
      }
    }
  }
  return arr1Len - invalid;
};

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)) // 2
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)) // 2
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)) // 1
