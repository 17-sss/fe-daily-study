top down

```js
const Knapsack = (limit, obj) => {
 function NS(idx, l) {
  if (l <= 0) return 0;
  if (idx <= -1) return 0;
  const [value, weight] = obj[idx];
  
  return Math.max(NS(idx -1, l - weight) + value, NS(idx -1, l));
 }


};

Knapsack(5, [
 [30, 1],
 [20, 2],
 [40, 3],
 [10, 4],
]);



```