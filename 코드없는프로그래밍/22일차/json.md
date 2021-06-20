## 1. Subarray Sum Equals K

### 요약

영상을 잘못 이해했는지 풀이대로 시도했는데 실패했습니다!  
그래서 다르게 풀어봤어요.

### 풀이

1. 먼저 여러 값을 저장할 변수들을 선언했습니다.

```js
// sum을 key로, sum의 빈도를 value로 저장하는 변수, map의 이름을 가진 object :)
const map = {};
map[0] = 1;
// nums의 요소들을 탐색하며, 합계를 저장하는 변수
let sum = 0;
// 결과 반환 시 유효한 경우의 수 합계를 반환하기 위한 변수
let total = 0;
```

2. 반복문을 통해 nums를 방문하며, total과 map, sum을 갱신합니다.

```js
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  total += map[sum - k] || 0;
  map[sum] = (map[sum] || 0) + 1;
}
```

위 반복문의 흐름은 아래와 같습니다.

```
nums = [6, 3, 2, 5, 3, -3]
k = 10 일 때,

map = {
  0: 1
}
sum = 0
total = 0

i = 0
  nums[i] = 6
  sum = 6
  total = map[-4] 는 존재하지 않으므로 0
  map = {
    0 : 1,
    6 : 1
  }

i = 1
  nums[i] = 3
  sum = 9
  total = map[-1] 은 존재하지 않으므로 0
  map = {
    0 : 1,
    6 : 1,
    9 : 1
  }

i = 2
  nums[i] = 2
  sum = 11
  total = map[1] 은 존재하지 않으므로 0
  map = {
    0 : 1,
    6 : 1,
    9 : 1,
    11 : 1
  }

i = 3
  nums[i] = 5
  sum = 16
  total = map[6] 은 존재하므로 + 1
  map = {
    0 : 1,
    6 : 1,
    9 : 1,
    11 : 1,
    16 : 1
  }

i = 4
  nums[i] = 3
  sum = 19
  total = map[9] 는 존재하므로 + 1
  map = {
    0 : 1,
    6 : 1,
    9 : 1,
    11 : 1,
    16 : 1,
    19 : 1
  }

i = 5
  nums[i] = -3
  sum = 16
  total = map[6] 은 존재하므로 + 1
  map = {
    0 : 1,
    6 : 1,
    9 : 1,
    11 : 1,
    16 : 2,
    19 : 1
  }

return total = 3
```

**코드**

```js
var subarraySum = function(nums, k) {
  const map = {};
  map[0] = 1;
  let sum = 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += map[sum - k] || 0;
    map[sum] = (map[sum] || 0) + 1;
  }
  return total;
};
```

## 2. Subarray Sums Divisible by K

시도 중....
