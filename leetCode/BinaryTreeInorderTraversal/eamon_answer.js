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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
let arr = []
if(root === null) return arr;
    
    const dfs = (tree) => {
        if(tree === null) return ;
        else{ 
        dfs(tree.left)
        arr.push(tree.val)
        dfs(tree.right)
        }  
    }
    dfs(root)
    return arr
};