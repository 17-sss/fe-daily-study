/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(
  1,
  new TreeNode(4, new TreeNode(4), new TreeNode(4)),
  new TreeNode(5, new TreeNode(5))
);

var longestUnivaluePath = function (root) {
  if (!root) return 0;
  let temp = 0;

  const dfs = (cur) => {
    if (cur == null) return 0;

    const val = cur.val;
    let left = 0;
    let right = 0;
    let tl = dfs(cur.left);
    let tr = dfs(cur.right);

    if (cur.left !== null && cur.left.val === val) {
      left = tl + 1;
    }
    if (cur.right !== null && cur.right.val === val) {
      right = tr + 1;
    }

    temp = Math.max(temp, left + right);
    return Math.max(left, right);
  };
  dfs(root);
  return temp;
};

console.log(longestUnivaluePath(root));
