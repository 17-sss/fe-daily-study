https://leetcode.com/problems/fibonacci-number/
509. Fibonacci Number

```js
/**
 * @param {number} n
 * @return {number}
 */

function fib(n, left=0, right=1, round=0) {
  if (round <= 1) {
    if (n === 0) return left;
    if (n === 1) return left + right;
    return fib(n, left, right, round + 1);
  }
  if (round >= 2) {
    if( round === n) return left + right;
    return fib(n, right, left + right, round + 1);
  }
}
```
fib(4); count = 0 => 4
fib(3); count = 4 => 7
fib(2); count = 7 => 9
fib(1); count = 9 => 10
fib(0); count = 10;
-----
fib(2);

```js
left = 0;
right = 1;

for(i=0; i < 4; i++) {
  sum = left + right;
  left = right;
  right = sum;

}

피보나치답  |   재할당
------------------------
sum = 1;
sum = 2; / l = 1; r = 2;
sum = 3; / l = 2; r = 3;
sum = 5; / l = 3; r = 5;

```
 - 피보나치 단계별로 이해해보기
```js
// step1 - 함수로 반복을 해보자
function fib() {
  fib();
}
fib();
```
```js
// step2 - 함수의 종료를 지정해보자
function fib(n) {
  // 4번째까지 돌릴거다.
  // if (4가 되면)  return;
  if (n === 4) return;
  fib(n+1); // step3 - 함수의 종료까지 어떻게 도달할까요?
}
fib(0); // step4 시작을 어떻게 하지?

// step5 변수를 어떻게 다루지? -> 함수로 넘겨주자
function fib(n, left, right) {

  if (n === 4) return left + right;
  return fib(n + 1, right, left + right); 
}
fib(0, 0, 1);
```

```js
// step6 강제된 종료를 처음 실행할 때 넘겨주자
function fib(n, left, right, count) {

  if (n === count) return left + right;
  return fib(n + 1, right, left + right, count); 
}
fib(0, 0, 1, 5);
```
