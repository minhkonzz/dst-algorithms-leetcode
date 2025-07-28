/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {TreeNode}
 */

const sortedArrayToBST = function (nums) {
  let mid = Math.floor(nums.length / 2);
  if (nums.length === 0) return null;
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])); // [0,-3,9,-10,null,5]
console.log(sortedArrayToBST([1, 3])); // [3,1]
