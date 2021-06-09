## Basic Calculator II

### 풀이

1. 정규표현식을 통해 띄어쓰기를 삭제
2. 값이 담길 **stack**을 선언
3. *, / 여부를 파악하는 변수 **operator**를 선언
4. 문자를 저장할 변수 **n**을 선언
5. *, /를 저장할 변수 **tmp**를 선언

```js
s = s.replace(/\s/g, '');
const stack = [];
const operator = new Set(['*', '/']);
let n = '';
let tmp = '';
```

6. 곱하기 또는 나누기가 있을 경우 그 값을 계산하는 함수 선언

```js
function calculTmp() {
  if(tmp) {
    const val = stack.pop();
    if(tmp === '*') {
      stack.push(val * n);
    } else {
      stack.push(parseInt(val / n));
    }
    tmp = '';
  } else {
    stack.push(n);          
  }
}
```

7. 반복문을 통해 문자열의 문자들을 확인하는 나머지 코드

```js
for(let i = 0; i < s.length; i++) {
  if(operator.has(s[i])) {
    calculTmp();
    n = ''; 
    tmp = s[i];
  } else {
    if(s[i] === '+' || s[i] === '-') {
      calculTmp();
      n = '';
    }
    n += s[i];
  }
}
calculTmp();
return stack.reduce((acc, cur) => acc + Number(cur), 0);
```

### 해설

```
s = '13+ 2*2 * 100 -5' 일 때,

정규표현식을 통해 띄어쓰기를 삭제
s = '13+2*2*100-5'

i = 0
s[0] = '1', 연산자가 아니므로 n에 추가
n = '1'
tmp = ''
stack = []

i = 1
s[1] = '3', 연산자가 아니므로 n에 추가
n = '13'
tmp = ''
stack = []

i = 2
s[2] = '+', 연산자 이므로 calculTmp()를 호출.
  calculTmp()
    tmp가 비어있으므로 stack에 n을 추가
  n을 빈 문자열로 할당
n = ''
tmp = ''
stack = ['13']

i = 3
s[3] = '2', 연산자가 아니므로 n에 추가
n = '2'
tmp = ''
stack = ['13']

i = 4
s[4] = '*', 연산자 이므로 calculTmp()를 호출.
  calculTmp()
    tmp가 비어있으므로 stack에 n을 추가, *또는 /이므로 tmp에 '*' 할당
  n을 빈 문자열로 할당
n = ''
tmp = '*'
stack = ['13', '2']

i = 5
s[5] = '2', 연산자가 아니므로 n에 추가
n = '2'
tmp = '*'
stack = ['13', '2']

i = 6
s[6] = '*', 연산자 이므로 calculTmp()를 호출.
  calculTmp()
    tmp가 비어있지 않으므로 stack에 마지막 값과 n을 tmp에 해당하는 연산자로 연산,
    연산의 결과(2*2)를 stack에 추가
    *또는 /이므로 tmp에 '*' 할당
  n을 빈 문자열로 할당
n = ''
tmp = '*'
stack = ['13', 4]

i = 7
s[7] = '1', 연산자가 아니므로 n에 추가
n = '1'
tmp = '*'
stack = ['13', 4]

i = 8
s[8] = '0', 연산자가 아니므로 n에 추가
n = '10'
tmp = '*'
stack = ['13', 4]

i = 9
s[9] = '0', 연산자가 아니므로 n에 추가
n = '100'
tmp = '*'
stack = ['13', 4]

i = 10
s[10] = '-', 연산자 이므로 calculTmp()를 호출.
  calculTmp()
    tmp가 비어있지 않으므로 stack에 마지막 값과 n을 tmp에 해당하는 연산자로 연산,
    연산의 결과(2*2)를 stack에 추가
    *또는 /가 아니므로 tmp에 '' 할당
  n을 빈 문자열로 할당
n = ''
tmp = ''
stack = ['13', 400]

i = 11
s[11] = '5', 연산자가 아니므로 n에 추가
n = '5'
tmp = ''
stack = ['13', 400]

반복문의 종료 이후 calculTmp()를 호출
tmp가 비어있으므로 stack에 n을 추가

stack = ['13', 400, '5']
stack의 합계를 reduce로 반환, 답 = 408
```

**코드**

```js
var calculate = function(s) {
  s = s.replace(/\s/g, '');
  const stack = [];
  const operator = new Set(['*', '/']);
  let n = '';
  let tmp = '';

  function calculTmp() {
    if(tmp) {
      const val = stack.pop();
      if(tmp === '*') {
        stack.push(val * n);
      } else {
        stack.push(parseInt(val / n));
      }
      tmp = '';
    } else {
      stack.push(n);          
    }
  }

  for(let i = 0; i < s.length; i++) {
    if(operator.has(s[i])) {
      calculTmp();
      n = ''; 
      tmp = s[i];
    } else {
      if(s[i] === '+' || s[i] === '-') {
        calculTmp();
        n = '';
      }
      n += s[i];
    }
  }
  calculTmp();
  return stack.reduce((acc, cur) => acc + Number(cur), 0);
};
```