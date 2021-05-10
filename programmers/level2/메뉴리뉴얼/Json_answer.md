## 요약

dfs를 활용하여 접근하였습니다.  
이번주 메인 주제였던 dfs의 심화 문제 느낌?..

**풀이**

```js
function solution(orders, course) {
  const map = {}; // dfs의 결과를 담을 객체. 이름만 map이고 Object ::)
  const dfs = (order, i, s) => {
    // 예외 처리
    if (i > order.length) return;
    // map의 바깥 프로퍼티 값은 course 배열의 값이므로, 합성된 문자열 길이가 course에 있는지 확인
    if (map[s.length]) {
      const str = s.split("").sort().join("");
      // map에 카운트
      if (map[s.length][str]) map[s.length][str] += 1;
      else map[s.length][str] = 1;
    }
    // 주어진 주문의 길이를 초과하지 않는 선에서 재귀호출
    for (; i < order.length; i++) {
      dfs(order, i + 1, s + order[i]);
    }
  };
  // map의 내부 객체 세팅
  course.forEach((v) => {
    map[v] = {};
  });
  // order와 초깃값을 기준으로 dfs 호출
  orders.forEach((v) => {
    dfs(v, 0, "");
  });

  const result = [];
  course.forEach((v) => {
    const values = Object.values(map[v]);
    // course 값에 해당하는 배열이 비어있다면 추가할 필요가 없음
    if (values.length > 0) {
      const max = Math.max(...values);
      // 문제 조건상 최댓값이 1보다 커야 결과에 추가!
      if (max > 1) {
        result.push(
          ...Object.keys(map[v]).filter((key) => map[v][key] === max)
        );
      }
    }
  });
  // 오름차순 정렬 및 반환
  return result.sort();
}
```

**코드**

```js
function solution(orders, course) {
  const map = {};
  const dfs = (order, i, s) => {
    if (i > order.length) return;
    if (map[s.length]) {
      const str = s.split("").sort().join("");
      if (map[s.length][str]) map[s.length][str] += 1;
      else map[s.length][str] = 1;
    }
    for (; i < order.length; i++) {
      dfs(order, i + 1, s + order[i]);
    }
  };
  course.forEach((v) => {
    map[v] = {};
  });
  orders.forEach((v) => {
    dfs(v, 0, "");
  });

  const result = [];
  course.forEach((v) => {
    const values = Object.values(map[v]);
    if (values.length > 0) {
      const max = Math.max(...values);
      if (max > 1) {
        result.push(
          ...Object.keys(map[v]).filter((key) => map[v][key] === max)
        );
      }
    }
  });
  return result.sort();
}
```
