## 1. Climb Stair

```js
const climbStairs = function (n) {
  const answer = Array(n + 1).fill(0);
  answer[1] = 1;
  answer[2] = 2;
  for (let i = 3; i < answer.length; i++) {
    answer[i] = answer[i - 1] + answer[i - 2];
  }
  return answer[n];
};
```

## 2. Min Cost Climbing Stairs

```js
const minCostClimbingStairs = function (cost) {
  cost.push(0);
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 2], cost[i - 1]);
  }
  return cost.pop();
};
```
