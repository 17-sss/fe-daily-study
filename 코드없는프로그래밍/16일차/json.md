## Daily Temperatures

### 풀이 1. 정 순서로 방문

```js
const dailyTemperatures = function(T) {
  const stack = [];
  const answer = new Array(T.length).fill(0);
  T.forEach((t, i) => {
    while(stack.length && T[stack[stack.length - 1]] < t) {
      const tmp = stack.pop();
      answer[tmp] = i - tmp;
    }
    stack.push(i);
  });
  return answer;
};
```

### 풀이 2. 역 순서로 방문

```js
var dailyTemperatures = function(t) {
  const stack = [];
  const answer = [];
  for(let i = t.length - 1; i >= 0; i--) {
    while(stack.length && stack[stack.length - 1][0] <= t[i] && stack.pop()) {}
    answer[i] = stack.length ? stack[stack.length - 1][1] - i : 0;
    stack.push([t[i], i]);
  }
  return answer;
}
```