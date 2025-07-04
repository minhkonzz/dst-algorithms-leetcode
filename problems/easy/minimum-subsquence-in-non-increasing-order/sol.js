/**
 * Time Complexity: O(n + k) where k is the range of numbers (from max to the point where the condition is met)
 * Space Complexity: O(k) where k is the range of numbers in the input array
 * @param {number[]} nums
 * @return {number[]}
 */

const minSubsequence = function (nums) {
  let sum = 0;
  let max = 0;
  const map = {};
  for (const e of nums) {
    map[e] = (map[e] || 0) + 1;
    sum += e;
    if (e > max) max = e;
  }
  const res = [];
  let subSum = 0;
  let e = max;
  while (true) {
    while (map[e] > 0) {
      subSum += e;
      res.push(e);
      map[e] -= 1;
      if (sum - subSum < subSum) return res;
    }
    --e;
  }
};

console.log(minSubsequence([4, 3, 10, 9, 8])); // [10, 9]
console.log(minSubsequence([4, 4, 7, 6, 7])); // [7,7,6]
