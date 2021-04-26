## 요약

dfs를 사용하여 접근했습니다.  
numbers의 길이가 탐색 대상의 위치인 인덱스와 같을 때, 타겟값 과의 비교를 하게 됩니다.

**풀이**

```js
function solution(numbers, target) {
  let answer = 0;
  const dfs = (i, num) => {
    if (i < numbers.length) {
      dfs(i + 1, num + numbers[i]);
      dfs(i + 1, num - numbers[i]);
    } else {
      answer += num === target;
    }
  };
  dfs(0, 0);
  return answer;
}
```
