## 요약

dfs와 백트래킹을 활용하여 풀이하는 문제 입니다.

```js
var longestUnivaluePath = function (root) {
  let result = 0;
  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    if (node.left && node.left.val === node.val) left++;
    else left = 0;
    if (node.right && node.right.val === node.val) right++;
    else right = 0;
    result = Math.max(result, left + right);
    return Math.max(left, right);
  };
  dfs(root);
  return result;
};
```
