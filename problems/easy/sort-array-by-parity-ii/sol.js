/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArrayByParityII = function (nums) {
  const n = nums.length;
  let oddArr = [];
  let evenArr = [];
  let result = [];
  for (let i = 0; i < n; ++i) {
    if (nums[i] % 2 == 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }

  let oddIndex = 0, evenIndex = 0;

  for (let i = 0; i < n; ++i) {
    if (i == 0 || i % 2 == 0) {
      result.push(evenArr[evenIndex]);
      ++evenIndex;
    } else {
      result.push(oddArr[oddIndex]);
      ++oddIndex;
    }
  }
  return result;
};

console.log(sortArrayByParityII([4, 2, 5, 7])); // [4,5,2,7]
console.log(sortArrayByParityII([2, 3])); // [2,3]
