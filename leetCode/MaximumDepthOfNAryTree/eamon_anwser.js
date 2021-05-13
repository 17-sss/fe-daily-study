/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let maxDepth = 0;

    const dfs = (cur,cnt=1) => {
        if(!cur) return;
         if(!cur.children.length) {
          maxDepth = Math.max(maxDepth,cnt)
             return;
         }else{
            cur.children.forEach((v)=> {
            dfs(v, cnt+1)})
         }
    
    }
    dfs(root)
    return maxDepth
};