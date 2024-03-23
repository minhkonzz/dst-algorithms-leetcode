/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var solve = function(r1, r2) {
   if(!r1 && !r2) return true;
   if((!r1 || !r2) || r1.val !== r2.val) return false;
   return solve(r1.left,r2.right) && solve(r1.right,r2.left);
}

/**
* @param {TreeNode} root
* @return {boolean}
*/
var isSymmetric = function(root) {
   return solve(root.left,root.right);
};