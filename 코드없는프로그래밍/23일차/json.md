## 1. Contiguous Array

### 요약

0과 1이 같은 갯수로 등장하는 부분 배열을 찾는 문제입니다.  


### 풀이 1. 브루트포스

시간 초과로 실패했습니다. :(

```js
var findMaxLength = function(nums) {
  let max = 0;
  for(let i = 0; i < nums.length; i++) {
    let zero = 0;
    let one = 0;
    for(let j = i; j < nums.length; j++) {
      if(nums[j]) one++;
      else zero++;
      if(zero === one) max = Math.max(max, one + zero);
    }
  }
  return max;
};
```

### 풀이 2. 영상의 풀이

map을 활용한 풀이법입니다.  
영상과 완벽히 일치하지는 않습니다!

1. 여러 값을 저장할 변수를 선언합니다.

```js
// 영상의 풀이대로 cumulative sum의 key, value를 저장하기 위함
const map = new Map();
// cumulative sum, 최초의 값에 0을 추가.
const nums2 = [0];
// 결과를 담기 위한 배열
const result = [];
// cumulative sum을 만들기 위해 합계를 저장하는 역할을 하는 변수
let sum = 0;
```

2. cumulative sum을 만듭니다.
3. map에 cumulative sum의 key, value를 저장합니다.

```js
nums.forEach(num => {
  sum += num === 1 ? 1 : -1; // 0을 -1로 변환
  nums2.push(sum);
});

nums2.forEach((num, i) => {
  const list = map.get(num);
  if(list) list.push(i);
  else map.set(num, [i]);
});
```

4. map의 values를 비교하여 최대 길이를 구합니다.

```js
for(const list of map.values()) {
  result.push(list[list.length - 1] - list[0]);
}
```

위 코드들의 흐름은 아래와 같습니다.

```
nums = [0,1,0,0,1,0,1,1,1,1,1] 일 때,

const map = new Map()
const nums2 = [0]
const result = []

2. cumulative sum 만들기
const nums2 = [0,1,0,-1,0,-1,0,1,2,3,4]

3. map에 cumulative sum의 key, value를 저장하기
i = 0, num = 0
  map = {
    0: [0]
  }
i = 1, num = 1
  map = {
    0: [0],
    1: [1],
  }
i = 2, num = 0
  map = {
    0: [0, 2],
    1: [1],
  }
i = 3, num = -1
  map = {
   -1: [3]
    0: [0, 2],
    1: [1],
  }
i = 4, num = 0
  map = {
   -1: [3]
    0: [0, 2, 4],
    1: [1],
  }
i = 5, num = -1
  map = {
   -1: [3, 5]
    0: [0, 2, 4],
    1: [1],
  }
i = 6, num = 0
  map = {
   -1: [3, 5]
    0: [0, 2, 4, 6],
    1: [1],
  }
i = 7, num = 1
  map = {
   -1: [3, 5]
    0: [0, 2, 4, 6],
    1: [1, 7],
  }
i = 8, num = 2
  map = {
   -1: [3, 5]
    0: [0, 2, 4, 6],
    1: [1, 7],
    2: [8]
  }
i = 9, num = 3
  map = {
   -1: [3, 5]
    0: [0, 2, 4, 6],
    1: [1, 7],
    2: [8],
    3: [9]
  }
i = 10, num = 4
  map = {
   -1: [3, 5]
    0: [0, 2, 4, 6],
    1: [1, 7],
    2: [8],
    3: [9],
    4: [10]
  }

3번의 코드까지 완료했을 때의 map은 아래와 같습니다.

map = {
  -1: [3, 5]
  0: [0, 2, 4, 6],
  1: [1, 7],
  2: [8],
  3: [9],
  4: [10]
}

4. map의 values를 비교하여 최대 길이를 구합니다.

문제의 조건에서 map의 value인 배열의 마지막 값과 첫 번째 값의 차가 해당 key의 최댓값이 됩니다.  
그러므로 최댓값에 해당하는 값을 result 배열에 추가하고, 마지막으로 sort된 값의 마지막 값을 반환하면 정답이 됩니다.

예시
  const nums = [0,1,0,0,1,0,1,1,1,1,1]
  const nums2 = [0,1,0,-1,0,-1,0,1,2,3,4]
    map의 -1은 5 - 3, [1, 0]에 해당하며, 2가 최댓값. 
    map의 0은 6 - 0, [1, 0, 0, 1, 0, 1]에 해당하며, 6이 최댓값.
    map의 1은 7 - 1, [0, 0, 1, 0, 1, 1]에 해당하며, 6이 최댓값.
    map의 2, 3, 4는 요소가 1개이므로 0이 최댓값.

답은 [1, 0, 0, 1, 0, 1] 또는 [0, 0, 1, 0, 1, 1]이므로 6.
```

**코드**

```js
var findMaxLength = function(nums) {
  const map = new Map();
  const nums2 = [0];
  const result = [];
  let sum = 0;

  nums.forEach(num => {
    sum += num === 1 ? 1 : -1;
    nums2.push(sum);
  });
  
  nums2.forEach((num, i) => {
    const list = map.get(num);
    if(list) list.push(i);
    else map.set(num, [i]);
  });
  
  for(const list of map.values()) {
    result.push(list[list.length - 1] - list[0]);
  }

  return result.sort((a, b) => a - b).pop();
};
```