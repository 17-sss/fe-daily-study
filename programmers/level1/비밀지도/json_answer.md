## 요약

비트연산을 활용하여 접근했습니다!

**풀이**

```javascript
function solution(n, arr1, arr2) {
  // a | b 비트 연산!
  const answer = arr1.map((v, i) => binToSharp(addZero(n, (v | arr2[i]).toString(2))));
  return answer;
}

function addZero(n, str) {
  // 자릿수가 n이 아니라면 길이가 n이 되도록 0을 추가!
  return "0".repeat(n - str.length) + str;
}

function binToSharp(str) {
  // 반환을 위한 변환 처리
  return str.replace(/0/g, " ").replace(/1/g, "#");
}
```

**코드**
```javascript
const solution = (n, arr1, arr2) => arr1.map((v, i) => binToSharp(addZero(n, (v | arr2[i]).toString(2))));
const addZero = (n, str) => "0".repeat(n - str.length) + str;
const binToSharp = str => str.replace(/0/g, " ").replace(/1/g, "#");
```

**파이썬**
```python
def solution(n, arr1, arr2): return [bin(arr1[i] | arr2[i])[2:].zfill(n).replace('1', '#').replace('0', ' ') for i in range(n)]
```