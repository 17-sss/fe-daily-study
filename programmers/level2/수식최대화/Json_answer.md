## 요약

경우의 수를 고려해서 최댓값을 만드는 문제.  
연산자의 우선순위대로 계산을 해야하며, 주어진 정보는 문자열이므로 문자열에서 숫자와 연산자를 분리해야 합니다!

먼저 연산자는 **'+', '-', '\*'** 3종류만 사용하므로 우선순위 연산자 변수를 선언합니다.

**우선순위 연산자 변수**

```js
const priorities = [
  ['+', '-', '*'],
  ['+', '*', '-'],
  ['-', '+', '*'],
  ['-', '*', '+'],
  ['*', '+', '-'],
  ['*', '-', '+'],
];
```

다음으로는 주어진 문자열에서 연산자와 숫자를 분리합니다.

**연산자와 숫자 분리**

```js
const operators = expression.match(/[\-\*\+]/g);
// "100-200*300-500+20" => ["-", "*", "-", "+"]

const numbers = expression.match(/\d+/g);
// "100-200*300-500+20" => ["100", "200", "300", "500", "20"]
```

이후 전개는 다음과 같습니다.

```js
priorities.forEach((priority) => {
  // 원본 배열을 유지하기 위해 spread 연산으로 변수 선언
  const _operators = [...operators];
  const _numbers = [...numbers];
  // 우선순위 배열의 개별 요소의 순서대로 연산을 진행
  priority.forEach((p) => {
    let i = _operators.indexOf(p);
    // 우선순위 대상인 연산자가 배열에 존재한다면 반복해서 연산을 진행
    while (i > -1) {
      _numbers[i] = eval(_numbers[i] + p + _numbers[i + 1]);
      // 연산이 끝난 후 배열에서 연산자와 뒤에 오는 피연산자를 제거
      _operators.splice(i, 1);
      _numbers.splice(i + 1, 1);
      // i를 재할당!
      i = _operators.indexOf(p);
    }
  });
  max = Math.max(Math.abs(_numbers[0]), max);
});
/*
_operators.splice(i, 1), _numbers.splice(i + 1, 1) 인 이유!
연산자는 두개의 피연산자가 필요하므로 연산 이후의 결과를 numbers의 i에 저장하고, 뒤의 피연산자와 현재 연산자를 삭제합니다.
 priority = ['+', '-', '*'];
 operator = ["-", "*", "-", "+"];
 numbers = ["100", "200", "300", "500", "20"];
  step '+'
    i = 3
    numbers[3] = eval(numbers[3]+numbers[4]); // ('500+20') => (500+20)
    operator = ["-", "*", "-"];
    numbers = ["100", "200", "300", "520"];
  step '-'
    i = 0
    numbers[0] = eval(numbers[0]-numbers[1]); // ('100-200') => (-100)
    operator = ["*", "-"];
    numbers = ["-100", "300", "520"];
    i = 1
    numbers[1] = eval(numbers[1]-numbers[2]); // ('300-520') => (-220)
    operator = ["*"];
    numbers = ["-100", "-220"];
  step '*'
    i = 0
    numbers[0] = eval(numbers[0]-numbers[1]); // ('-100 * -220') => (22000)
    operator = [];
    numbers = ["22000"];
max = Math.max(Math.abs(22000), max);
*/
```

**코드**

```js
function solution(expression) {
  const priorities = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];
  let max = 0;
  const operators = expression.match(/[\-\*\+]/g);
  const numbers = expression.match(/\d+/g);
  priorities.forEach((priority) => {
    const _operators = [...operators];
    const _numbers = [...numbers];
    priority.forEach((p) => {
      let i = _operators.indexOf(p);
      while (i > -1) {
        _numbers[i] = eval(_numbers[i] + p + _numbers[i + 1]);
        _operators.splice(i, 1);
        _numbers.splice(i + 1, 1);
        i = _operators.indexOf(p);
      }
    });
    max = Math.max(Math.abs(_numbers[0]), max);
  });
  return max;
}
```
