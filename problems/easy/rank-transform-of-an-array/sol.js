/**
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * @param {number[]} arr
 * @return {number[]}
 */

const arrayRankTransform = function (arr) {
  if (arr.length == 0) return [];
  if (arr.length == 1) return [1];
  const uniques = [...new Set(arr)].sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < uniques.length; ++i) {
    map.set(uniques[i], i + 1);
  }
  return arr.map((e) => map.get(e));
};

console.log(arrayRankTransform([40, 10, 20, 30])); // [4,1,2,3]
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // [5,3,4,2,8,6,7,1,3]
