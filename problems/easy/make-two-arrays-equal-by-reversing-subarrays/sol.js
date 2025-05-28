/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

const canBeEqual = function (target, arr) {
  const frequencyMap = new Map();
  for (let i = 0; i < target.length; i++) {
    frequencyMap.set(target[i], (frequencyMap.get(target[i]) || 0) + 1);
    frequencyMap.set(arr[i], (frequencyMap.get(arr[i]) || 0) - 1);
  }
  for (let count of frequencyMap.values()) {
    if (count !== 0) {
      return false;
    }
  }
  return true;
};

console.log(canBeEqual([1,2,3,4], [2,4,1,3])) // true
console.log(canBeEqual([3,7,9], [3,7,11])) // false
