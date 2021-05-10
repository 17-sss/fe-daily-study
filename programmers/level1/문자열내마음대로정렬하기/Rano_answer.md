## 어려웠던 점 & 회고
- 지금도 sort 함수의 동작을 제대로 모르는 상태여서, 디버깅을 해봤지만 그래도 이해가 되질 않네요.
- sort 관련된 강의를 보며 공부를 더 해보려합니다!

## 코드 (왜 돼?)
```js
// https://programmers.co.kr/learn/courses/30/lessons/12915
// 문자열 내 마음대로 정렬하기
const solution = (strings, n) =>
    strings.sort((a, b) => {
        const first = a[n];
        const second = b[n];

        if (first === second) {
            return (a > b) - (a < b);
        } else {
            return (first > second) - (first < second);
        }
    });

solution(["sun", "bed", "car"], 1);     // ["car", "bed", "sun"]
solution(["abce", "abcd", "cdx"], 2);   // ["abcd", "abce", "cdx"]
```