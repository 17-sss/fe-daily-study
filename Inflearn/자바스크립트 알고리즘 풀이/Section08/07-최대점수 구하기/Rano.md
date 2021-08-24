## 인프런 - 자바스크립트 알고리즘 풀이

### **07.** 재귀함수와 완전탐색(깊이우선탐색, DFS) - 최대점수 구하기

**> 문제**

이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.  
각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.  
제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.  
(해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

- 입력

  ```
  5 20

  10 5
  25 12
  15 8
  6 3
  7 4
  ```

- 출력: 41

**> 메모**

- 제한 시간은 `m`, 각 문제의 점수는 `ps`, 각 문제의 소요 시간은 `pt`
- 이 DFS 문제는 이진 트리일까..? (한번 그려본 그림)  
  <img src="https://user-images.githubusercontent.com/33610315/130574206-a94f6249-f88f-4740-9436-c8aa74e7cb78.jpeg" width=500>

- 강의 보고 난 후 메모
  - **선택한다 안한다** 이런 문제는 이진 트리 (부분 집합) 문제!
  - 만약 주어진 값이 20개 30개 이러면 시간 엄청 걸림!!! (Level이 엄청나게 들어감..)  
     (이런거는 못푼다.. 재귀로는! / 동적 프로그래밍으로 풀어야 함)

**> 코드**

_ME_

```js
function solution(m, ps, pt) {
  const qArr = ps.map((v, idx) => [v, pt[idx]]);
  const result = [];

  function DFS(currScore, runTime, L) {
    if (qArr.length === L) return runTime <= m && result.push(currScore);

    const [score, time] = qArr[L];
    DFS(currScore, runTime, L + 1);
    DFS(currScore + score, runTime + time, L + 1);
  }
  DFS(0, 0, 0);

  return Math.max(...result);
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt)); // 41
```

- 먼저 각 점수와 각 소요시간을 하나로 합치기 위해 이중배열 생성 `qArr`.
- 이진 트리 순회하듯 풀이.
- DFS의  
   _첫번째_ 매개변수는 DFS를 진행하면서 현재 총 점수,  
   _두번째_ 는 현재 총 소요 시간,  
   _세번째_ 는 `qArr`의 배열 길이만큼만 DFS를 실행하기 위한 변수.
- 세번째 매개변수가 `qArr`의 길이와 같아지면 (idx는 초과한 것이기에) DFS를 중지.  
   그 후 제한시간 `m`과 DFS의 `runTime`과 비교시 같거나 작다면 `result` 배열에 추가
- `solution` 함수의 최종 결과 값은 `result` 배열에서 가장 큰 값.

_ANSWER_

```js
function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
```

_내 풀이와 차이점_

- DFS가 끝나는 시점에서 (`if (L === n)`) 계속해서 최대값을 체크 후 업데이트 함  
  `result` 배열 같은 거 없음 (공간이 필요도 없음)
- 만약 순회하다가 현재 소요시간이 주어진 제한시간보다 크다면 해당 DFS 종료함!
