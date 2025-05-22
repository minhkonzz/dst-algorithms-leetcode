/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

const differenceOfSum = function (nums) {
  const elementSum = nums.reduce((acc, cur) => acc + cur, 0);
  let digitSum = 0;
  for (const num of nums) {
    if (num % 10 == num) {
      digitSum += num;
      continue;
    }
    let _num = num;
    while (true) {
      const dv = _num % 10;
      digitSum += dv;
      _num = (_num - dv) / 10;
      if (_num == 0) break;
    }
  }
  return Math.abs(elementSum - digitSum);
};

console.log(differenceOfSum([1, 15, 6, 3])) // 9
console.log(differenceOfSum([1, 2, 3, 4])) // 0
