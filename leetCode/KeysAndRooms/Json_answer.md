## 요약

방문처리 하면서 방문하지 않은 장소라면 방문합니다!

**배열 사용**

```js
var canVisitAllRooms = function (rooms) {
  const visited = Array(rooms.length).fill(false);
  const dfs = (i) => {
    if (visited[i]) return;
    visited[i] = true;
    rooms[i].forEach((room) => dfs(room));
  };
  dfs(0);
  return visited.filter((visit) => visit).length === rooms.length;
};
```

**셋 사용**

```js
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const dfs = (i) => {
    if (visited.has(i)) return;
    visited.add(i);
    rooms[i].forEach((room) => dfs(room));
  };
  dfs(0);
  return visited.size === rooms.length;
};
```
