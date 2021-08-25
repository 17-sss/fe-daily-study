## 인프런 - 자바스크립트 알고리즘 풀이

### **08.** 재귀함수와 완전탐색(깊이우선탐색, DFS) - 중복순열 구하기

**> 문제**

1부터 N까지 번호가 적힌 구슬이 있습니다.  
이 중 중복을 허락하여 M번을 뽑아 일렬로 나열 하는 방법을 모두 출력합니다.

- 입력: 3 2
- 출력

  ```
  1 1
  1 2
  1 3
  2 1
  2 2
  2 3
  3 1
  3 2
  3 3
  9
  ```

**> 메모**

- 순열 & 중복순열?

  - 순열: 서로 다른 n개에서 중복을 허락하지 않고 r개를 일렬로 나열하는 수 (n \* r)
  - 중복순열: 서로 다른 n개에서 중복을 허락하고, r개를 일렬로 나열하는 수 (n \*\* r)

- 이 문제를 이해하려 썼던 메모  
  <img src="https://user-images.githubusercontent.com/33610315/130716847-7e2cd9d8-d9a6-46ea-bf3b-fefac3995ec5.jpeg" width=500 />
  <br/>
  <img src="https://user-images.githubusercontent.com/33610315/130716851-e248fcdf-79c5-4bb9-b328-454f5e30b288.jpeg" width=500 />


- 강의 보면서 메모

  - DFS 문제는 다중 for문으로 풀어도 됨. 하지만...  
    구해야하는 Depth가 깊어지면 for문을 또 써야함. 이게 효율이 있을까? 없지!  
    그래서 재귀를 쓰는 것
  - tmp를 result에 넣어줄때 복사해서 넣어줘야함. DFS 내에서 계속 tmp 배열은 변화하기 떄문.

- 회고..?
  - 이 문제 순열 & 중복순열에 대한 개념이 없었어서 푸는데 이해하는데에도 오래걸림.
  - 나중에 다시 풀어볼 필요가 있음!

**> 코드**

_ME_

```js
function solution(n, m) {
  const result = [];
  const tmp = Array.from({ length: m }, () => -1);

  function DFS(L) {
    if (L === m) return result.push([...tmp]);
    for (let i = 1; i <= n; i++) {
      tmp[L] = i;
      DFS(L + 1); //  L + i 하면 에바 꽁치 넙치 됨!
    }
  }

  DFS(0);

  return [result, result.length];
}

console.log(solution(3, 2));
```

_ANSWER_

```js
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
```
