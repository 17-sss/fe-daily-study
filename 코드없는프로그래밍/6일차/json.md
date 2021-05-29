## Implement strStr()

### 풀이 1. indexOf()

내장 메서드로 해결했습니다!

```js
const strStr = (haystack, needle) => haystack.indexOf(needle);
```

### 풀이 2. kmp

kmp 알고리즘에 대한 이해는 됐지만 어떻게 구현해야할 지 감이 잡히지 않아 코드를 참고했습니다.

> [링크](https://leetcode.com/problems/implement-strstr/discuss/1023530/Python-KMP)

**kmp**

```js
const kmp = (s) => {
  // 문자열의 길이의 배열을 선언
  const result = Array(s.length).fill(0);
  let j = 0;
  let i = 1;
  // 문자열 길이를 초과하지 않는 선까지 i를 증가!
  while (i < s.length) {
    // i와 j가 같다면 이미 나온 문자이므로 그 문자의 다음 위치를 배열에 저장
    if (s[i] === s[j]) {
      result[i] = j + 1;
      // j는 1 증가.
      j++;
    } else {
      // i와 j가 다르고, j가 0보다 크다면 j는 이전 값의 요소가 가르키는 값(인덱스)으로 재할당
      if (j > 0) j = result[j - 1];
    }
    i++;
  }
  return result;
};
```

**문자열 찾기**

```js
var strStr = function (haystack, needle) {
  // 찾을 수 없는 경우 예외처리
  if (needle === '') return 0;
  if (needle.length > haystack.length) return -1;
  // kmp를 통해 lps 배열을 생성.
  const lps = kmp(needle);
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    // i와 j가 같다면 다음 문자열을 검사
    if (haystack[i] === needle[j]) {
      i++;
      j++;
      // 만약 j의 값이 needle의 길이와 같다면 needle의 모든 값이 있다는 뜻이므로 현재 인덱스에서 needle을 뺀 값이 답이 된다.
      if (j === needle.length) return i - needle.length;
    } else {
      // 그렇지 않고, j가 0보다 크다면 j는 이전 값의 요소가 가르키는 값(인덱스)으로 재할당
      if (j > 0) j = lps[j - 1];
      else i++;
    }
  }
  return -1;
};
```

**코드**

```js
const kmp = (s) => {
  const result = Array(s.length).fill(0);
  let j = 0;
  let i = 1;
  while (i < s.length) {
    if (s[i] === s[j]) {
      result[i] = j + 1;
      i++;
      j++;
    } else {
      if (j > 0) j = result[j - 1];
      else i++;
    }
  }
  return result;
};

var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  if (needle.length > haystack.length) return -1;
  const lps = kmp(needle);
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
      if (j === needle.length) return i - needle.length;
    } else {
      if (j > 0) j = lps[j - 1];
      else i++;
    }
  }
  return -1;
};
```

## Rotate String

> 주어진 문자열 s의 문자를 배열처럼 LIFO 방식으로 순서를 바꾸며, goal을 만들 수 있는지 여부를 반환합니다.

### 풀이 1. slice

slice를 활용해서 반복문의 카운트 변수를 제외한 추가적인 변수를 선언하지 않고 풀었습니다.

```js
var rotateString = function (s, goal) {
  if (s === goal) return true;
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i - s.length) + s.slice(0, i) === goal) {
      return true;
    }
  }
  return false;
};
```

### 풀이 2. 문자열 붙이기

문자열의 회전은 같은 문자열을 2번 반복해서 붙인 것과 같다고 합니다.  
맞는 말이네요! :)

```js
const rotateString = (s, goal) =>
  s.length === goal.length && s.repeat(2).includes(goal);
```

### 풀이 3. kmp

추가 예정입니다. :(
