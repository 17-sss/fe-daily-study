## Decode String

### 풀이 1. 기존 풀이

정규표현식을 통해 숫자를 미리 분리했습니다.  
이후 stack과 index를 지칭하는 변수 j를 사용하여 풀이했습니다.

**코드**

```js
var decodeString = function(s) {d
  const numbers = [1].concat(s.match(/\d{1,}/g));
  s = s.replace(/\d?\d/g, '');
  const stack = Array(numbers.length).fill('');
    
  let j = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '[') {
      j++;
    } else if(s[i] === ']') {
      stack[j - 1] += stack[j].repeat(numbers[j]);
      stack[j] = '';
      numbers.splice(j--, 1);
    } else {
      stack[j] += s[i];
    }
  }
  return stack[0];
};
```

### 풀이 2. 두 개의 스택

영상의 풀이처럼 문자열을 저장할 스택과 카운터를 저장하는 스택을 만들었습니다.

**코드**

```js
var decodeString = function(s) {
  const stack = ['', ''];
  const countStack = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '[') stack.push('');
    else if(s[i] === ']') {
      const str = stack.pop();
      const count = countStack.pop();
      stack[stack.length - 1] += str.repeat(count);
    } else if(s[i].match(/\d/)) {
      let j = i;
      while(s[++j].match(/\d/)) {}
      countStack.push(s.slice(i, j));
      i = j - 1;
    } else {
      stack[stack.length - 1] += s[i];
    }
  }
  return stack.pop();
};
```