/**
 * Total distinct elements in nums: k
 * Max value in nums: max
 * Time Complexity: O(k + max);
 * Space Complexity: O(max);
 * Just use this approach if max is not too large
 * @param {number[][]} nums
 * @return {number[]}
 */

const intersection = function (nums) {
  const res = [];
  const lookup = nums.flat().reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, []);

  for (let i = 0; i < lookup.length; ++i) {
    if (lookup[i] == nums.length) res.push(i);
  }

  return res;
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
); // [3,4]

console.log(
  intersection([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // []

console.log(
  intersection([
    [7, 34, 45, 10, 12, 27, 13],
    [27, 21, 45, 10, 12, 13],
  ])
); // [10,12,13,27,45]
