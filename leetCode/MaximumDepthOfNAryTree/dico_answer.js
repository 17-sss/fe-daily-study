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


//첫번째 시도: (실패) maxDepth가 새로운 값으로 올바르게 갱신이 안됌...
const maxDepth = function(root) {
    let maxDepth = 0;
    if (!root) return maxDepth;

    function dfs(node, depth) {
        if (!node.children) return depth;
        node.children.forEach(child => {
            maxDepth = Math.max(maxDepth, dfs(child, depth + 1));
        })
    }
    dfs(root, 1);
    return maxDepth;
};

//text 안됌.
console.log("answer1:", maxDepth([1,null,3,2,4,null,5,6])); //3
console.log("answer2:", maxDepth([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14])); //5



//두번째 시도: (성공) max를 새로운 값으로 기억할 수 있도록 매 dfs에 return 값을 부여함.
const maxDepth = function(root) {
   if (!root) return 0;

   function dfs(node, depth) {
       let max = depth;
       node.children.forEach(child => {
           max = Math.max(max, dfs(child, depth + 1));
       })
       return max;
   }
   return dfs(root, 1);
};

//오늘의 배운점:
// - 예문에서 제공되는 배열상태의 tree 구조는 편의를 위한 것. 실제로 console.log(root)하게 되면 객체형식의 tree를 확인할 수 있다.
// ex.
const root = {
    value: 1,
    children: [
        {
            value: 3,
            children: [
                {
                    value: 5,
                    children: []
                },
                {
                    value: 6,
                    children: []
                }
            ]
        },
        {
            value: 2,
            children: []
        },
        {
            value: 4,
            children: []
        }
    ]
}

