## [sort의 compareFunction 설명 (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 


compareFunction 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬됩니다. a와 b가 비교되는 두 요소라면,

 `compareFunction(a, b)이 0보다 작은 경우` a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.

`compareFunction(a, b)이 0을 반환하면` a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. 

`compareFunction(a, b)이 0보다 큰 경우`, b를 a보다 낮은 인덱스로 소트합니다.

compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.
따라서 compare 함수의 형식은 다음과 같습니다.
```JS
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```
