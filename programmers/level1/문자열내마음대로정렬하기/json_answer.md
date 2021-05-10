## 요약

sort를 활용하여 n번째 문자끼리 값을 비교하고, 같다면 사전 순으로 비교합니다.

**코드**

```javascript
const solution = (strings, n) => strings.sort((a, b) => a[n] < b[n] || a[n] === b[n] && a < b ? -1 : 1);
```