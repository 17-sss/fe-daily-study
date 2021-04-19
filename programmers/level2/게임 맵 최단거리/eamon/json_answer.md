## 요약

bfs를 사용하여 최단경로를 확인하는 문제입니다.  
dfs로 접근하면 효율성 테스트에서 떨어지게 됩니다.

**dfs**

```javascript
function solution(maps) {
  // n, m은 빈번하게 사용하므로 변수로 선언했습니다.
  const n = maps.length - 1;
  const m = maps[0].length - 1;
  
  function dfs(i, j, cnt) {
    // i와 j가 범위를 벗어나거나, 해당 인덱스의 maps이 벽인 경우 리턴합니다.
    if(i < 0 || j < 0 || i > n || j > m || maps[i][j] === 0) return;
    // 이미 방문했으면서 카운트가 더 높은 값이면 최솟값이 아니므로 리턴합니다.
    if(maps[i][j] > 1 && cnt > maps[i][j]) return;
    maps[i][j] = cnt;
    // 4방향으로 dfs를 재귀 호출합니다.
    dfs(i + 1, j, cnt + 1);
    dfs(i - 1, j, cnt + 1);
    dfs(i, j + 1, cnt + 1);
    dfs(i, j - 1, cnt + 1);
  }
  dfs(0, 0, 1);
  // 마지막 지점이 1보다 크다면 방문이 가능한 지점이므로 마지막 지점의 값을 반환, 아니라면 -1
  return maps[n][m] > 1 ? maps[n][m] : -1;
}
```

**bfs**

```javascript
function solution(maps) {
  const x = [0, 0, 1, -1];
  const y = [1, -1, 0, 0];
  const n = maps.length;
  const m = maps[0].length;
  // x, y, 카운트 = [a, b, c];
  // 사실 x와 y는 반대로 바뀌어야 하지만 습관이 잘못들었다 :)
  const queue = [[0, 0, 1]];

  while(queue.length > 0) {
    const [i, j, cnt] = queue.shift();
    maps[i][j] = 0;
    // 종료 지점이면 바로 리턴 처리
    if(i === n - 1 && j === m - 1) return cnt;
 
    for(let k = 0; k < 4; k++) {
      const X = i + x[k], Y = j + y[k];
      if(X < 0 || Y < 0 || X >= n || Y >= m) continue;
      if(maps[X][Y] === 0) continue;
      // 별도의 방문 처리용 변수를 선언하지 않고, 방문한 지점의 값을 0으로 재할당.
      maps[X][Y] = 0;
      queue.push([X, Y, cnt + 1]);
    }
  }

  // while문의 조건을 벗어나면 더 이상 접근이 되지 않으므로 -1을 반환한다.
  return -1;
}
```

**코드**

```javascript
function solution(maps) {
  const x = [0, 0, 1, -1];
  const y = [1, -1, 0, 0];
  const n = maps.length;
  const m = maps[0].length;
  // x, y, 카운트 = [a, b, c];
  const queue = [[0, 0, 1]];
  // 사실 x와 y는 축의 관점에서 접근했을 때, 반대로 바뀌어야 합니다.
  // x = 1, y 2
  // [0, 0, 1]
  // [2, 0, 3]
  // [1, 4, 1]
  // 위의 이차원배열에서 x[1][2]는 3이 아닌 4를 가리키게 됩니다.
  // 자주 착각을 하는데 습관이 잘못들어서 잘 안고쳐지네요 :(

  // 큐가 비어있지 않다면 접근가능한 노드가 있는 상태입니다.
  while(queue.length > 0) {
    // 접근 가능한 지점의 정보를 큐에서 빼고 방문처리를 합니다.
    const [i, j, cnt] = queue.shift();
    maps[i][j] = 0;

    // 만약 i와 j가 끝점이라면 정답이므로 cnt를 반환합니다.
    if(i === n - 1 && j === m - 1) return cnt;
 
    // x -1, +1 과 y -1, +1 방문을 위한 반복문.
    for(let k = 0; k < 4; k++) {
      const X = i + x[k], Y = j + y[k];
      // -1, +1한 결과가 배열의 범위를 벗어난다면 검사하지 않습니다.
      // break로 하게 되면 x로 접근 불가능한 곳이지만 y로 접근 가능한 경우에도 검사를 진행하지 않으므로 continue!
      if(X < 0 || Y < 0 || X >= n || Y >= m) continue;
      // 이미 방문했다면 continue
      if(maps[X][Y] === 0) continue;

      // 이후 해당 좌표의 값을 큐에 추가합니다.
      queue.push([X, Y, cnt + 1]);
    }
  }
  // while문이 종료되었다면 더 이상 접근 가능한 노드가 없으므로 -1을 반환합니다.
  return -1;
}
```