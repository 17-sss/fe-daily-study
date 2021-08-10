# Graph

## DFS (Depth First Search)

- recursion - callstack
- iteration - stack

## BFS

```js
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
 const _seen = new Set();

 //DfS
 const iterationDfs = () => {
  const seen = new Set([0]);
  let stack = [0];

  while (stack.length) {
   const idx = stack.pop();
   const keys = rooms[idx];
   for (const key of keys) {
    if (!seen.has(key)) stack.push(key);
    seen.add(key);
   }
  }

  return seen.size === rooms.length;
 };

 const recursionDfs = (key) => {
  if (_seen.has(key)) return;
  _seen.add(key);
  const keys = rooms[key];

  keys.forEach((v) => recursionDfs(v));
 };

 const BFS = () => {
  const seen = new Set([0]);
  let stack = [0];
  while (stack.length) {
   const idx = stack.shift();
   const keys = rooms[idx];
   for (const key of keys) {
    if (!seen.has(key)) {
     stack.push(key);
     seen.add(key);
    }
   }
  }

  return seen.size === rooms.length;
 };

 //    recursionDfs(0)
 //  return _seen.size === rooms.length

 return BFS();
};
```
