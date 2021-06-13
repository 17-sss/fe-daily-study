## Daily Temperatures

### 풀이

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
