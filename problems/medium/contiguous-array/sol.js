/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */

const findMaxLength = function (nums) {
  const map = new Map();
  map.set(0, -1);
  let maxLen = count = 0;
  for (let i = 0; i < nums.length; i++) {
    count = nums[i] == 0 ? count - 1 : count + 1;
    if (map.has(count)) {
      maxLen = Math.max(maxLen, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }
  return maxLen;
};

console.log(
  findMaxLength([
    1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0,
    1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0,
    1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1,
  ])
); // 94

console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])); // 6
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0])); // 6
