/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} arr
 * @return {number}
 */

const findSpecialInteger = function (arr) {
  const n = arr.length;
  if (n < 3) return arr[0];
  const targetFreq = n * 0.25;
  let current = arr[0], count = 1;
  for (let i = 1; i < n; ++i) {
    if (arr[i] == current) {
      ++count;
      if (targetFreq < count) return arr[i];
      continue;
    }
    count = 1;
    current = arr[i];
  }
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])); // 6
console.log(findSpecialInteger([1, 1])); // 1
console.log(findSpecialInteger([1, 2, 3, 3])); // 3
console.log(findSpecialInteger([15, 15, 21, 21, 32, 32, 33, 33, 33, 34, 35])); // 33
