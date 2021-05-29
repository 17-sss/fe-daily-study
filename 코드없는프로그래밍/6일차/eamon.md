String Matching

=> O(n) 의 시간 복잡도를 가지고있다.

1)KMP 알고리즘

aaaaaabb

aaaab
01230
Leetcode 28


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
```js
var strStr = function(haystack, needle) {

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

제이슨 풀이대로 이해함