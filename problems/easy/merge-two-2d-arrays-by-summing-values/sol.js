/**
 * Time Complexity: O(nums1_length + nums2_length)
 * Space Complexity: O(nums1_length + nums2_length)
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */

const mergeArrays = function (nums1, nums2) {
  const map = new Map();
  for (const [id, val] of nums1) {
    map.set(id, val);
  }
  for (const [id, val] of nums2) {
    map.set(id, (map.get(id) || 0) + val);
  }
  return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
};

console.log(mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]])); // [[1,6],[2,3],[3,2],[4,6]]
console.log(mergeArrays([[2,4],[3,2],[5,6]], [[1,3],[4,3]])); // [[1,3],[2,4],[3,2],[4,9],[5,6]]
