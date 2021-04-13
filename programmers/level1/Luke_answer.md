```javascript
function solution(n) {
  // true 소수
  const suso = new Array(n).fill(true);
  suso[0] = false;
  for (let i = 2; i ** 2 <= n; i++) {
    if (suso[i - 1] === true) {
      for (let j = i ** 2; j <= n; j += i) {
        suso[j - 1] = false;
      }
    }
  }
  return suso.filter((e) => e).length;
}
```
