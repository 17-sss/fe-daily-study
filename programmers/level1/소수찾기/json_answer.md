## 요약

시간 복잡도를 최대한 줄여야 하는 문제입니다!  

**풀이**

```javascript
function solution(n) {
  let result = 0;
  const arr = [];
  for (let i = 2; i <= n; i += 1) {
    arr.push(i);
  }
  for (let i = 2; i <= n; i += 1) {
    if (arr[i] === 0) {
      continue;
    }
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  for (let i = 2; i <= n; i += 1) {
    if (arr[i] !== 0) {
      result++;
    }
  }
  return result;
}
```
