## 1. Merge Intervals

### 풀이

```js
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let target = intervals[0];
  intervals.forEach((interval) => {
    if (target[1] >= interval[0]) {
      target[1] = Math.max(target[1], interval[1]);
    } else {
      result.push(target);
      target = interval;
    }
  });
  return result.concat(target);
};
```

## 2. Shortest Unsorted Continuous Subarray

### 풀이 1. 시간복잡도 O(n), 영상의 풀이대로 풀이!

```js
var findUnsortedSubarray = function (nums) {
  let toRight = 0;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < prev) toRight = i;
    else prev = nums[i];
  }

  let toLeft = nums.length - 1;
  prev = nums[toLeft];
  for (let i = toLeft - 1; i >= 0; i--) {
    if (nums[i] > prev) toLeft = i;
    else prev = nums[i];
  }

  return toLeft < toRight ? toRight - toLeft + 1 : 0;
};
```
