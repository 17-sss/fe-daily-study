## 요약

특정 인덱스가 100이 넘더라도 이전 인덱스의 값도 100이 넘어야 배포가 가능합니다.  
shift를 사용하기 보다 인덱스를 이동하는 방법으로 접근했습니다.

**풀이**

```javascript
function solution(progresses, speeds) {
  const answer = [];
  // 진척이 필요한 시작점을 의미
  let i = 0;
  while (i < progresses.length) {
    let j;
    // 진척 시작점부터 종료 지점까지 개발을 진행
    for (j = i; j < progresses.length; j++) {
      progresses[j] += speeds[j];
    }
    // j를 재활용하기 위해 i 값으로 재할당
    j = i;
    while (progresses[j] >= 100) {
      // 진척이 가능한 값이 있다면 증가
      j++;
    }
    if (j - i) answer.push(j - i);
    i = j;
  }
  return answer;
}
```

**코드**

```javascript
function solution(progresses, speeds) {
  const answer = [];
  let i = 0;
  while (i < progresses.length) {
    let j;
    for (j = i; j < progresses.length; j++) {
      progresses[j] += speeds[j];
    }
    j = i;
    while (progresses[j] >= 100) {
      j++;
    }
    if (j - i) answer.push(j - i);
    i = j;
  }
  return answer;
}
```
