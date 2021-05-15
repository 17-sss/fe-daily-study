## 어려웠던 점 & 회고

-   이번꺼는 빨리 풀었으면서도 뭔가 뿌듯했습니다.  
-   내 자신을 알라..  
    아직 난이도 있는 문제를 풀기보단, Low Level 부터 열시미 많이 반복하여 푼 뒤에  
    좀 난이도 있는 걸 푸는 게 나을 것 같다고 느꼈습니다.

## 코드 (1차시, 통과 성공 (84ms, faster than 95.73%) )

```js
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Maximum Depth of N-ary Tree, 이 Tree에서 제일 긴 Depth를 찾는 문제!

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
const maxDepth = (root) => {
    if (!root) return 0;

    const result = [];
    const dfs = (node, nResult) => {
        if (node.val !== null) nResult++;   // "!node.val"이렇게 체크하면 0일 때 ++ 안댐!!
        if (node.children.length > 0)
            node.children.forEach((currNode) => dfs(currNode, nResult));

        result.push(nResult);
    };

    dfs(root, 0);

    return Math.max(...result);
};
```
