## 인프런 - 자바스크립트 알고리즘 풀이

### **09.** 재귀함수와 완전탐색(깊이우선탐색, DFS) - 동전 교환

**> 문제**

다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로  
교환 해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.

첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다.  
두 번째 줄에는 N개의 동전의 종류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.  
각 동전의 종류는 100원을 넘지 않는다.

결과 값은 거슬러 줄 동전의 최소개수를 출력한다.

- 입력
  ```
  3
  1 2 5
  15
  ```
- 출력: 3

**> 메모**

- 입력 예시를 보면 동전 종류 (`1 2 5`)를 통해  
   `15`원을 만들 수 있는 경우의 수를 모두 구해서 거슬러 줄 동전의 최소개수를 계산해서 출력하는 듯

**> 코드**

_ME (1)_

```js
function solution(m, arr) {
  let result = Number.MAX_SAFE_INTEGER;
  function DFS(cnt, curr) {
    if (m < curr) return;
    if (m === curr) return (result = Math.min(result, cnt));
    for (let i = 0; i < arr.length; i++) DFS(cnt + 1, curr + arr[i]);
  }
  DFS(0, 0);

  return result;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
```

- 이 풀이도 정답은 맞지만, 필요없는 값들을 쳐내진 않았음.  
   강의에서 보면  
   DFS의 현재 재귀 된 깊이 (`cnt`, 강의 답에선 `L`)가 예전 깊이보다  
   크다면 더 DFS를 실행할 필요도 없음!!  
   이것에 대한 처리 필요! (_ME (2)_ 코드 참고!)

_ME (2)_

```js
function solution(m, arr) {
  let result = Number.MAX_SAFE_INTEGER;
  let prevCnt = Number.MAX_SAFE_INTEGER;

  function DFS(cnt, curr) {
    if (m < curr || prevCnt <= cnt) return;
    if (m === curr) {
      prevCnt = cnt;
      return (result = Math.min(result, cnt));
    }
    for (let i = 0; i < arr.length; i++) DFS(cnt + 1, curr + arr[i]);
  }
  DFS(0, 0);

  return result;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
```

- 강의의 정답과의 차이점은 `prevCnt`이런 변수는 없음.  
   `prevCnt <= cnt`가 아닌 `resukt <= cnt` 이렇게하면 되는건데..  
   강의의 정답 (_ANSWER_ 코드)에선 `L >= answer`을 뜻함!

_ANSWER_

```js
function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
```
