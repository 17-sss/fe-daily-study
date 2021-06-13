Distance To greater Number (daily temperature)
739. Daily Temperatures https://leetcode.com/problems/daily-temperatures/

- temperatures를 뒤에서부터 순회하면서 [val, idx] 쌍으로 stack에 쌓는다.
- 다음 loop에 들어오는 요소를 stack의 마지막 요소의 val와 비교하여
- 해당 요소가 더 클 경우 stack의 마지막 요소를 pop()해버리고,(해당 요소보다 더 큰 숫자가 stack에서 나올때까지 반복한다.)
- 해당 요소가 더 작을 경우 마지막 요소의 인덱스와 해당 요소의 인덱스 사이의 거리를 answer에 넣는다.
- loop가 모두 끝나면 answer 배열을 리턴한다.

```js
const dailyTemperatures = function(temperatures) {
const stack = [];
const answer = [];

  for(let i = temperatures.length - 1; i >= 0; i--) {
    const curVal = temperatures[i];
    let lastSet = stack[stack.length - 1];

    while(stack.length && curVal >= lastSet[0]) {
      stack.pop();
      lastSet = stack[stack.length - 1];
    }

    if (!stack.length) {
      answer[i] = 0;
    } else {
      answer[i] = lastSet[1] - i;
    }
    stack.push([curVal, i]);
  }

  return answer;
};
```