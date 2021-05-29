## 1. Find the Duplicate Number

### 요약

중복된 값을 찾는 문제입니다.  
시간 복잡도, 공간 복잡도에 대해 고민해볼 수 있는 좋은 문제였어요!

**코드 1. set**

```js
var findDuplicate = function (nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) return n;
    set.add(n);
  }
};
```

**코드 2. 브루트 포스**

```js
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return nums[i];
    }
  }
};
```

**코드 3. 정렬 사용**

```js
var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prev) return nums[i];
    prev = nums[i];
  }
};
```

**코드 4. 배열 내부에서 마킹**

```js
var findDuplicate = function (nums) {
  for (const n of nums) {
    const absN = Math.abs(n);
    if (nums[absN] < 0) return absN;
    nums[absN] *= -1;
  }
};
```

## 2. Two Sum

### 요약

합계가 target인 요소를 찾는 문제 입니다.  
시간 복잡도를 O(n^2) 또는 O(n)으로 풀어볼 수 있었어요!

**코드 1. Object**

```js
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const key = (target - nums[i]).toString();
    if (obj.hasOwnProperty(target - nums[i])) {
      return [obj[key], i];
    }
    obj[nums[i]] = i;
  }
};
```

**코드 2. 브루트포스**

```js
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
```

## 3. 3Sum

### 요약

0부터 배열의 길이 - 2까지 피봇을 이동하며, 투포인터를 활용해서 0에 해당하는 합계를 찾는 문제입니다.  
중복된 값이 들어가면 안되므로, 중복에 대한 예외처리가 필요합니다.

**코드**

```js
var threeSum = function (nums) {
  const result = [];
  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return result;
};
```

## 4. 3Sum Closest

### 요약

이전에 풀었던 문제라서 거기서 해설을 조금 추가했습니다!

**코드**

```javascript
var threeSumClosest = function (nums, target) {
  // 먼저 nums를 오름차순으로 정렬합니다.
  nums.sort((a, b) => a - b);
  let near = Number.MAX_SAFE_INTEGER;
  // 반복문에서 i를 기준값으로, l과 r은 투포인터로 사용
  for (let i = 0; i < nums.length - 2; i++) {
    // 오름차순으로 정렬이 됐으므로 대상이 되는 target값과 비교하여 l, r의 위치를 조정
    let l = i + 1;
    let r = nums.length - 1;

    // 좌 우의 위치가 같지 않다면 계속 진행
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      const gap = Math.abs(sum - target);
      if (sum < target) l++;
      else r--;
      // 가장 가까운 거리로 near를 갱신.
      if (gap < Math.abs(near - target)) near = sum;
    }
  }
  return near;
};
```

## 5. 4Sum

### 요약

2개의 two sum을 사용하거나 3sum과 추가적인 포인터로 접근하면 되지않을까 생각했습니다!

### 풀이 1. 3sum + 포인터 O(n^3)

out of memory!  
while문을 감싸는 부분에서 문제가 발생한게 아닌가 싶었습니다!  
바로 twosum + twosum으로 넘어갔기에 별다른 분석없이 넘어갔어요.

```js
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const t = target - nums[i];
    let p = i + 1;
    let left = p + 1;
    let right = nums.length - 1;
    for (; p < nums.length - 2; p++) {
      while (left < right) {
        const sum = nums[p] + nums[left] + nums[right];
        if (sum === t) {
          result.push([i, p, left, right]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
        } else if (sum < t) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};
```

### 풀이 2. 2sum + 2sum

2sum으로 나올 수 있는 모든 경우의 수를 구한 뒤, 2sum을 다시 진행했습니다.  
두 번째 2sum을 좀 더 수정할 수는 없을까 고민했어요.

```js
var fourSum = function (nums, target) {
  // 길이가 4보다 작으면 정답이 될 수 없으므로 빈 배열을 반환!
  if (nums.length < 4) return [];

  // 오름차순으로 숫자 정렬
  nums.sort((a, b) => a - b);
  const twoSum = {};

  // 한 번의 twoSum을 통해 target에서 새로운 숫자를 파생!
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const ts = target - nums[i] - nums[j];
      // a - b = c 일 때, c를 만들 수 있는 경우의 수는 여러가지가 될 수 있으므로 배열에 저장.
      if (twoSum[ts]) twoSum[ts].push([i, j]);
      else twoSum[ts] = [[i, j]];
    }
  }
  const result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const ts = nums[i] + nums[j];
      // 두 수의 합산으로 타겟을 만들 수 있는지 확인.
      if (twoSum[ts]) {
        twoSum[ts].forEach((sum) => {
          // 만들 수 있다면 그 수의 키 값에 해당하는 배열의 인덱스와 현재 i, j 를 비교,
          // 만약 다르다면 4개의 숫자로 만들 수 있는 경우이므로 result에 추가
          if (i !== sum[0] && i !== sum[1] && j !== sum[0] && j !== sum[1])
            result.push([nums[i], nums[j], nums[sum[0]], nums[sum[1]]]);
        });
      }
    }
  }
  // result에는 중복된 원소가 들어갈 수 있으므로 중복 삭제.
  const resultMap = {};
  result.map((v) => (resultMap[v.sort((a, b) => a - b).join('')] = v));
  return Object.values(resultMap);
};
```
