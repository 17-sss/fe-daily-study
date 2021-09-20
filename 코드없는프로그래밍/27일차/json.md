## 1. Minimum Path Sum

### 풀이

상단 및 좌측 부분을 우선 처리 후 나머지 부분을 계산했습니다! :)

```js
const minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let i = 1; i < n; i++) {
    grid[0][i] += grid[0][i - 1];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[m - 1][n - 1];
};
```

## 2. Coin Change

### 풀이

```js
const coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0;
  for (let i = 0; i <= amount; ++i) {
    for (let j = 0; j < coins.length; ++j) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
```
