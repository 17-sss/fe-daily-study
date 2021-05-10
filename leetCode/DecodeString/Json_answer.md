## 요약

정규표현식을 통해 숫자를 미리 분리했습니다.  
이후 stack과 index를 지칭하는 변수 j를 사용하여 풀이했습니다.

**코드**

```js
var decodeString = function (s) {
  const numbers = [1].concat(s.match(/\d{1,}/g));
  s = s.replace(/\d?\d/g, '');
  const stack = Array(numbers.length).fill('');

  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      j++;
    } else if (s[i] === ']') {
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
