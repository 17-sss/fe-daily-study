## 1. Fibonacci Number

### 풀이 1. 반복문

피보나치의 점화식인 F(n) = F(n - 1) + F(n - 2) 를 이용했습니다.  
그 과정에서 이전 값을 활용하기 위해 배열을 선언했습니다.

**코드**

```js
var fib = function(n) {
  const dp = [0, 1];
  for(let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
```

### 풀이 2. 재귀

위의 풀이를 재귀 함수로 접근했습니다.

**코드**

```js
const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
```