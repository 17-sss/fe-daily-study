## 1. Sort Colors

### 풀이 1. sort()

자신감 상승을 위해 sort로 먼저 풀어봤습니다.  
::)

**코드**

```js
const sortColors = (nums) => nums.sort((a, b) => a - b);
```

### 풀이 2. count

집계를 위한 변수를 만들어서 풀이했습니다.

**코드**

```js
var sortColors = function (nums) {
  const arr = Array(3).fill(0);
  nums.forEach((num) => (arr[num] += 1));
  let i = 0;
  arr.forEach((v, idx) => {
    for (let j = 0; j < v; j++) {
      nums[i++] = idx;
    }
  });
};
```

### 풀이 3. in-place

증감 연산자를 활용하여 라인을 다이어트했어요!

**코드**

```js
const swap = (nums, i, j) => {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

var sortColors = function (nums) {
  let i = -1;
  let s = 0;
  let e = nums.length - 1;
  while (++i <= e) {
    if (nums[i] === 0) swap(nums, s++, i);
    if (nums[i] === 2) swap(nums, e--, i--);
  }
};
```

## 2. Merge sorted array

### 풀이 1. in-place

```js
var merge = function (nums1, m, nums2, n) {
  let e = nums1.length - 1;
  let i = m - 1;
  let j = n - 1;
  while (i > -1 && j > -1) {
    nums1[e--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
  while (j > -1) {
    nums1[e--] = nums2[j--];
  }
};
```

### 풀이 2. 새로운 배열 생성

```js
var merge = function (nums1, m, nums2, n) {
  const nums3 = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      nums3.push(nums1[i++]);
    } else {
      nums3.push(nums2[j++]);
    }
  }
  while (i < m) {
    nums3.push(nums1[i++]);
  }
  while (j < n) {
    nums3.push(nums2[j++]);
  }
  for (let x = 0; x < nums1.length; i++) {
    nums1[x] = nums3[x];
  }
};
```

## 3. Find Peak Element

### 풀이 1. sort()

자신감 상승을 위해 sort로 먼저 풀어봤습니다!  
::)

```js
const findPeakElement = (nums) => nums.indexOf(Math.max(...nums));
```

### 풀이 2. 투 포인터

양 끝의 포인터를 이동시키며 풀이했습니다.

```js
var findPeakElement = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] > nums[j]) j--;
    else i++;
  }
  return i;
};
```

### 풀이 3. 이진 탐색

영상에서 소개된 이진 탐색으로 시간 복잡도 단축!

```js
var findPeakElement = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (nums[mid] < nums[mid + 1]) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }
  return i;
};
```
