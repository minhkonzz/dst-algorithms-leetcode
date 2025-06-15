/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const targetIndices = function (nums, target) {
  let smallerNumsCount = 0;
  let targetCount = 0;
  for (const e of nums) {
    if (e < target) {
      ++smallerNumsCount;
    } else if (e == target) {
      ++targetCount;
    }
  }
  const res = [];
  if (targetCount) {
    for (let i = smallerNumsCount; i < smallerNumsCount + targetCount; ++i) {
      res.push(i);
    }
  }
  return res;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2)); // [1,2]
console.log(targetIndices([1, 2, 5, 2, 3], 3)); // [3]
