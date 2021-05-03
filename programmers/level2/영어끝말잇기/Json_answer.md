## 요약

이전 문자열의 마지막 값을 저장하며, 현재 인덱스의 시작 값과 비교합니다!  
그리고 이미 등장한 값의 여부를 확인하기 위해 Set을 사용했습니다.

**코드 1**

```js
function solution(n, words) {
  const set = new Set();
  let prev = words[0][0];
  const idx = words.findIndex((v, i) => {
    if (set.has(v) || prev !== v[0]) {
      return true;
    }
    set.add(v);
    prev = v[v.length - 1];
  });
  return [(idx % n) + 1, parseInt(idx / n + 1)];
}
```

**코드 2(재귀)**

```js
function solution(n, words) {
  const set = new Set();
  const recursion = (prev, i = 0) => {
    if (i === words.length || prev !== words[i][0] || set.has(words[i]))
      return i;
    set.add(words[i]);
    return recursion(words[i][words[i].length - 1], i + 1);
  };
  const answer = recursion(words[0][0]);
  return answer === words.length
    ? [0, 0]
    : [(answer % n) + 1, Math.floor(answer / n) + 1];
}
```
