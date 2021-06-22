## 1. Minimum Area Rectangle

### 요약

영상의 설명대로 Map과 Set을 활용하여, 조회에서 시간복잡도를 줄이는게 핵심입니다!

### 풀이

1. **Map**과 최솟값을 저장할 변수 **min**을 선언합니다.

```js
const map = new Map();
let min = Infinity;
```

2. 영상의 설명대로 **Map**에 key로 x축, value인 **Set** 내부의 value로 y축을 할당합니다.

```js
points.forEach(point => {
  if(map.has(point[0])) {
    map.get(point[0]).add(point[1]);
  } else {
    map.set(point[0], new Set([point[1]]));
  }
});
```

3. 투포인터를 활용하여 사각형의 조건에 맞는 좌표를 찾습니다.
   1. 좌표를 찾았다면, **area**를 계산하여 **min**의 값과 비교, 갱신합니다.
4. 반복문 종료 이후 **min**의 값이 초깃값이라면 문제의 조건에 맞게 **0**을 아니라면 **min**을 반환합니다.

```js
for(let i = 0; i < points.length - 1; i++) {
  const [x, y] = points[i];
  for(let j = i + 1; j < points.length; j++) {
    const [x2, y2] = points[j];
    if(x !== x2 && y !== y2) {
      if(map.get(x).has(y2) && map.get(x2).has(y)) {
        const area = parseInt(Math.abs(x - x2) * Math.abs(y - y2));
        min = Math.min(min, area);
      }
    }
  } 
}
return min === Infinity ? 0 : min;
```

위 코드들의 흐름은 아래와 같습니다.

```
points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]] 일 때,

1. Map과 min 변수 선언
map = {}
min = Infinity

2. Map에 Set으로 value를 저장
i = 0, point[i] = [1, 1]
  map = {
    1: Set(1)
  }
i = 1, point[i] = [1, 3]
  map = {
    1: Set(1, 3)
  }
i = 2, point[i] = [3, 1]
  map = {
    1: Set(1, 3),
    3: Set(1)
  }
i = 3, point[i] = [3, 3]
  map = {
    1: Set(1, 3),
    3: Set(1, 3)
  }
i = 4, point[i] = [4, 1]
  map = {
    1: Set(1, 3),
    3: Set(1, 3),
    4: Set(1)
  }
i = 5, point[i] = [4, 3]
  map = {
    1: Set(1, 3),
    3: Set(1, 3),
    4: Set(1, 3)
  }

3. 투포인터를 활용하여 사각형의 조건에 맞는 좌표 찾기
points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
map = {
  1: Set(1, 3),
  3: Set(1, 3),
  4: Set(1, 3)
}
1) x !== x2, y !== y2여야 사각형의 대각선 좌표가 성립됩니다. 
2) 1)의 조건을 만족했을 때, map에 x와 x2에 해당하는 set에 y2, y값이 존재하면 반대편 대각선 좌표가 성립됩니다.

i = 0
  x, y = [1, 1]
    j = 1
      x2, y2 = [1, 3] = 만족하지 않음
    j = 2
      x2, y2 = [3, 1] = 만족하지 않음
    j = 3
      x2, y2 = [3, 3] = 1)의 조건 만족
        map 내부에 x, x2를 키로 접근했을 때, y2인 3과 y인 1의 값이 존재하므로 2)의 조건 만족
        area = 4
        min = 4
    j = 4
      x2, y2 = [4, 1] = 만족하지 않음
    j = 5
      x2, y2 = [4, 3] = 1)의 조건 만족
        map 내부에 x, x2를 키로 접근했을 때, y2인 3과 y인 1의 값이 존재하므로 2)의 조건 만족
        area = 6
        min = 4
i = 1
  x, y = [1, 3]
    j = 2
      x2, y2 = [3, 1] = 만족하지 않음
    j = 3
      x2, y2 = [3, 3] = 만족하지 않음
    j = 4
      x2, y2 = [4, 1] = 1)의 조건 만족
        map 내부에 x, x2를 키로 접근했을 때, y2인 1과 y인 3의 값이 존재하므로 2)의 조건 만족
        area = 6
        min = 4
    j = 5
      x2, y2 = [4, 3] = 만족하지 않음
i = 2
  x, y = [3, 1]
    j = 3
      x2, y2 = [3, 3] = 만족하지 않음
    j = 4
      x2, y2 = [4, 1] = 만족하지 않음
    j = 5
      x2, y2 = [4, 3] = 1)의 조건 만족
        map 내부에 x, x2를 키로 접근했을 때, y2인 3과 y인 1의 값이 존재하므로 2)의 조건 만족
        area = 2
        min = 2
i = 3
  x, y = [3, 3]
    j = 4
      x2, y2 = [4, 1] = 1)의 조건 만족
        map 내부에 x, x2를 키로 접근했을 때, y2인 1과 y인 3의 값이 존재하므로 2)의 조건 만족
        area = 2
        min = 2
    j = 5
      x2, y2 = [4, 3] = 만족하지 않음
i = 4
  x, y = [4, 1]
    j = 5
      x2, y2 = [4, 3] = 만족하지 않음

min은 Infinity가 아닌 2이므로 정답은 2

```

**오답**

문제가 min인데 max를 반환하는 기행을 저질렀습니다. :)

```js
// 오답!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var minAreaRect = function(points) {
  const map = new Map();
  let max = 0;
  points.forEach(point => {
    if(map.has(point[0])) {
      map.get(point[0]).add(point[1]);
    } else {
      map.set(point[0], new Set([point[1]]));
    }
  });
  for(let i = 0; i < points.length - 1; i++) {
    const [x, y] = points[i];
    for(let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j];
      if(x !== x2 && y !== y2) {
        if(map.get(x).has(y2) && map.get(x2).has(y)) {
          const area = parseInt(Math.abs(x - x2) * Math.abs(y - y2));
          max = Math.max(max, area);
        }
      }
    } 
  }
  return max;
};
// 오답!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
```

**코드**

```js
var minAreaRect = function(points) {
  const map = new Map();
  let min = Infinity;
  points.forEach(point => {
    if(map.has(point[0])) {
      map.get(point[0]).add(point[1]);
    } else {
      map.set(point[0], new Set([point[1]]));
    }
  });
  for(let i = 0; i < points.length - 1; i++) {
    const [x, y] = points[i];
    for(let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j];
      if(x !== x2 && y !== y2) {
        if(map.get(x).has(y2) && map.get(x2).has(y)) {
          const area = parseInt(Math.abs(x - x2) * Math.abs(y - y2));
          min = Math.min(min, area);
        }
      }
    } 
  }
  return min === Infinity ? 0 : min;
};
```