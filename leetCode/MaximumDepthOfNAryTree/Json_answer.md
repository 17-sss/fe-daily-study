## 요약

dfs를 활용하여 트리의 깊이를 구하는 문제 입니다!  
트리의 자식이 있는지 확인하기 위해 dfs를 재귀호출하며, 최대로 도달한 깊이를 반환하는 로직을 구현합니다.

**dfs 구조**

```js
// node : 전달할 node 정보
// depth : 현재 node의 깊이를 가지고 있는 변수
const dfs = (node, depth) => {
  // 1) node가 비어있다면 도달할 수 없는 위치이므로 저장된 depth를 반환합니다.
  if (!node) return depth;

  // 2) 깊이의 최댓값을 반환할 변수 max는 우선 depth로 초기화합니다.
  let max = depth;
  // node가 비어있는 조건은 1)에서 처리했으므로 children을 탐색합니다.
  node.children.forEach((v) => {
    // max 값을 현재 max와 dfs에 자식 요소를 인자로 전달한 값, depth + 1과 비교하여 갱신합니다.
    max = Math.max(max, dfs(v, depth + 1));
  });
  return max;
};
```

**흐름**

```js
/* 
주어진 tree
    1
  2   3
4       5
      7

step 1
  dfs(root, 1)
    root는 1이며, 비어있지 않으므로 1) 통과
    max = 1
    children = [2, 3]
      max = Math.max(1, dfs(2, 2))
        step 2-1
          dfs(2, 2)
            2는 비어있지 않으므로 1) 통과
            max = 2
            children = [4]
              max = Math.max(2, dfs(4, 3))
                step 3
                  dfs(4, 3)
                    4는 비어있지 않으므로 1) 통과
                    max = 3
                    children = []          
                    return 3
              max = 3
            return 3
      max = 3

    위의 스텝 1, 2-1, 3을 통해 [1, 2, 4]의 탐색을 마치고 max는 3이 됩니다.
    이후 1의 우측 자식요소를 탐색하게 됩니다.

      max = Math.max(3, dfs(3, 2))
        step 2-2
          dfs(3, 2)
            3은 비어있지 않으므로 1) 통과
            max = 2
            children = [5]
              max = Math.max(2, dfs(5, 3))
                step 3
                  dfs(5, 3)
                    5는 비어있지 않으므로 1) 통과
                    max = 3
                    children = [7]       
                      max = Math.max(3, dfs(7, 4))   
                        step 4
                          dfs(7, 4)
                            7은 비어있지 않으므로 1) 통과
                            max = 4
                            children = []          
                            return 4
                      max = 4
                    return 4
              max = 4
            return 4
      max = 4

  따라서 가장 깊은 깊이는 4가 됩니다. (1 -> 3 -> 5 -> 7)
*/
```

**코드**

```js
var maxDepth = function (root) {
  if (!root) return 0;
  const dfs = (node, depth) => {
    if (!node) return depth;
    let max = depth;
    node.children.forEach((v) => {
      max = Math.max(max, dfs(v, depth + 1));
    });
    return max;
  };
  return dfs(root, 1);
};
```
