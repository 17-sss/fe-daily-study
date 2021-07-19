```js
const change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0); 
  dp[0] = 1; 

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]; // dp[i - coin]의 수만큼 더해준다.
    }
  }
  return dp[amount];
};
```