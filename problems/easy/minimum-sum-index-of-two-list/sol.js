/**
 * Time Complexity: O(L1 + L2)
 * Space Complexity: O(L1) 
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

const findRestaurant = function (list1, list2) {
  const _m = {};
  for (let i = 0; i < list1.length; ++i) {
    _m[list1[i]] = i;
  }

  let res = [];
  let sum;
  let minSum = Infinity;
  for (let i = 0; i < list2.length && i <= minSum; ++i) {
    if (_m[list2[i]] == undefined) continue;
    sum = i + _m[list2[i]];
    if (sum > minSum) continue;
    if (sum < minSum) {
      res = [list2[i]];
      minSum = sum;
    } else {
      res.push(list2[i]);
    }
  }
  return res;
};
