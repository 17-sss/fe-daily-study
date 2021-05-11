## 요약

문제의 조건에 맞도록 numberMap을 만들었습니다!  
이후 dfs를 재귀 호출하며, str의 길이가 digits의 값과 같을 때만 결과 배열에 추가하였습니다.

**코드**

```js
// 다이얼에 해당하는 문자열을 미리 변수로 저장
const numberMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

var letterCombinations = function (digits) {
  // 예외처리, 빈 배열인 경우 빈 배열 반환.
  if (digits.length < 1) return [];
  // 결과를 담을 배열
  const result = [];
  const dfs = (i, str) => {
    // 조합한 str의 길이와 digits의 길이가 같다면 result에 추가
    if (str.length === digits.length) result.push(str);
    // i가 탐색 범위를 벗어나면 종료
    if (i === digits.length) return;
    // digits를 0부터 방문하며, 다이얼에 해당하는 문자 배열을 기준으로 재귀 호출
    numberMap[digits[i]].forEach((v) => dfs(i + 1, str + v));
  };
  dfs(0, '');
  return result;
};
```
