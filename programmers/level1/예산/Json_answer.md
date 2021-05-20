## 요약

최대한 많은 부서에 예산을 전달해야 하며, 부서 목록은 정렬이 되어있지 않으므로 정렬이 필요합니다.  
이후 부서 별 예산을 가능할 때 까지 지급하면서 전달한 부서의 숫자를 구했습니다.

**코드**

```js
const solution = (d, budget) => d.sort((a, b) => a - b).filter(v => { if(budget >= v) { budget -= v; return true; }}).length;
```