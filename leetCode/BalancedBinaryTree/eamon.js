/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
 if (root === null) return true;
 let res = true;
 const dfs = (node) => {
  if (node === null) return 0;

  const left = dfs(node.left);
  const right = dfs(node.right);

  if (left === false || right === false || Math.abs(left - right) > 1) {
   return false;
  }
  return Math.max(left, right) + 1;
 };
 return dfs(root) !== false;
};
