## 1. Valid Parentheses

### 풀이

stack을 활용하여 유효한 괄호인지 판별했습니다.  
문제의 핵심은 여는 괄호와 닫는 괄호는 한쌍으로 나와야한다는 점!  

```
여는 괄호가 나오면 닫는 괄호를 추가하고, 닫는 괄호와 여는 괄호를 비교하게 됩니다.

예)
if(s[i] === '(') stack.push(')');
else if(s[i] !== stack.pop()) return false; 
```

**코드 1. switch 활용**

```js
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (s[i] !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
```

**코드 2. object 활용**

Switch대신 object를 활용하여 코드를 간결하게 변경하였습니다!
```js
var isValid = function (s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if(map[s[i]]) stack.push(map[s[i]]);
    else if(s[i] !== stack.pop()) return false;
  }
  return stack.length === 0;
};
```

## 2. Minimum Remove to Make Valid Parentheses

### 풀이

유효하지 않는 괄호 쌍을 배제한 문자열을 반환하는 문제입니다.  
주어진 문자열을 배열로 변경하여 접근했습니다!

```
주어진 문자열 s가 "(a(b(c)d)" 일 때,
Array s = ["(", "a", "(", "b", "(", "c", ")", "d", ")"]

s를 반복문을 통해 순회하게 되며, 여는 괄호 '(' 가 등장하면, 해당 괄호의 인덱스를 stack에 push합니다.
이후 닫는 괄호가 나오면 pop처리를 하게 됩니다.
만약 닫는 괄호가 나왔을 때, stack이 비어있다면 그 괄호의 위치는 올바른 쌍이 아니므로 빈 문자열로 재할당하게 됩니다.

위의 문자열을 기준으로 반복문을 순회했을 때, 배열 s의 상태와 stack에 남는 값은 아래와 같습니다.

s = ["(", "a", "(", "b", "(", "c", ")", "d", ")"];
stack = [0];

이후 stack을 순회하며, stack의 요소에 가리키는 위치에 있는 요소의 값을 빈 문자열로 변경하게 됩니다.


```

```js
var minRemoveToMakeValid = function (s) {
  s = s.split('');
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else if (s[i] === ')') {
      if (stack.length) stack.pop();
      else s[i] = '';
    }
  }
  stack.forEach(v => s[v] = '');
  return s.join('');
};
```
