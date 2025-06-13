/**
 * Time Complexity: O(arr1_length + arr2_length)
 * Space Complexity: O(1)
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

const MAX_VALUE = 1000;

const relativeSortArray = function (arr1, arr2) {
  // count frequency of each value in arr1
  const freqs = new Array(MAX_VALUE + 1).fill(0);
  for (const value of arr1) {
    ++freqs[value];
  }
  // insert values in arr2 in relative order
  let i = 0;
  for (const value of arr2) {
    while (freqs[value] > 0) {
      --freqs[value];
      arr1[i++] = value;
    }
  }
  // insert remaining values
  for (let f = 0; f <= MAX_VALUE; ++f) {
    while (freqs[f] > 0) {
      --freqs[f];
      arr1[i++] = f;
    }
  }
  return arr1;
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])) // [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6])) // [22,28,8,6,17,44]
