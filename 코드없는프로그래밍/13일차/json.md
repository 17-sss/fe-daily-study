## 1. Remove All Adjacent Duplicates In String

### 풀이

영상처럼 스택을 하나 선언한 뒤, 스택의 마지막 값과 문자열의 문자들을 비교하는 방식으로 풀이했습니다!

**코드**

```js
var removeDuplicates = function(s) {
  const stack = [];
  for(let i = 0; i < s.length; i++) {
    if(stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};
```

## 2. Remove All Adjacent Duplicates in String II

### 풀이 1. 단일 배열

영상처럼 배열에 요소를 추가하고, 현재 배열의 길이가 k 이상이라면 배열의 마지막 k개 요소가 서로 일치하는지 검사하였습니다.  
일치할 경우 배열에서 삭제하게 됩니다!  

```
s = "deeedbbcccbdaa"
k = 3 일 때,

i = 0
stack = ['d']

i = 1
stack = ['d', 'e']

i = 2
stack = ['d', 'e', 'e']
dee 불일치

i = 3
stack = ['d', 'e', 'e', 'e']
eee 일치
stack = ['d']

i = 4
stack = ['d', 'b']

i = 5
stack = ['d', 'b', 'b']
dbb 불일치

i = 6
stack = ['d', 'b', 'b', 'c']
bbc 불일치

i = 7
stack = ['d', 'b', 'b', 'c', 'c']
bcc 불일치

i = 8
stack = ['d', 'b', 'b', 'c', 'c', 'c']
ccc 일치
stack = ['d', 'b', 'b']

i = 9
stack = ['d', 'b', 'b', 'b']
bbb 일치
stack = ['d']

i = 10
stack = ['d', 'd']

i = 11
stack = ['d', 'd', 'a']
dda 불일치

i = 12
stack = ['d', 'd', 'a', 'a']
daa 불일치

return 'ddaa'

```

**코드 1. 단일 배열**

```js
var removeDuplicates = function(s, k) {
  const stack = [];
  for(let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if(stack.length >= k) {
      let j = k;
      let length = stack.length;
      for(; j > 0; j--) {
        if(stack[length - j] !== s[i]) break;
      }
      if(j === 0) {
        for(j = k; j > 0; j--) {
          stack.pop();
        }
      }
    }
  }
  return stack.join('');
};
```

**코드 2. 두 개의 배열**

```js
var removeDuplicates = function(s, k) {
  if(s.length === 0) return;
  const stack = [s[0]];
  const countStack = [1];
  for(let i = 1; i < s.length; i++) {
    if(s[i] === stack[stack.length - 1]) {
      countStack[countStack.length - 1] += 1;
    } else {
      countStack.push(1);
    }
    stack.push(s[i]);
    if(countStack[countStack.length - 1] === k) {
      countStack.pop();
      for(let i = 0; i < k; i++) {
        stack.pop();
      }
    }
  }
  return stack.join('');
};
```