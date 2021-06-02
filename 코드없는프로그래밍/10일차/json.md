## Longest Substring Without Repeating Characters

## 코드스쿼드 데일리 스터디

### 풀이 1. Brute Force

O(n^3)의 시간 복잡도로 결국 실패!

```js
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let str = '';
  for (let i = 0; i < s.length; i++) {
    str = s[i];
    for (let j = i + 1; j < s.length; j++) {
      for (let k = 0; k < str.length; k++) {
        if (str[k] === s[j]) {
          max = Math.max(max, str.length);
          str = '';
          break;
        }
      }
      str += s[j];
    }
    max = Math.max(max, str.length);
  }
  return (max = Math.max(max, str.length));
};
```

### 풀이 2. Two Pointer

영상에 소개된 대로 투포인터를 사용해서 접근했습니다!

```js
var lengthOfLongestSubstring = function (s) {
  const map = {
    a: -1,
    b: -1,
    c: -1,
    d: -1,
    e: -1,
    f: -1,
    g: -1,
    h: -1,
    i: -1,
    j: -1,
    k: -1,
    l: -1,
    m: -1,
    n: -1,
    o: -1,
    p: -1,
    q: -1,
    r: -1,
    s: -1,
    t: -1,
    u: -1,
    v: -1,
    w: -1,
    x: -1,
    y: -1,
    z: -1,
  };
  let maxLength = 0;
  let begin = 0;
  for (let i = 0; i < s.length; map[s[i]] = i, i++) {
    begin = map[s[i]] >= begin ? map[s[i]] + 1 : begin;
    maxLength = Math.max(maxLength, i - begin + 1);
  }
  return maxLength;
};
```
