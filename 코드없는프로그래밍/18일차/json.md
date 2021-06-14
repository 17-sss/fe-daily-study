## 1. First Unique Character in a String

### 풀이 1. indexOf & lastIndexOf 활용

indexOf와 lastIndexOf를 활용하여 앞과 뒤가 같은 문자라면 해당하는 index를 반환합니다!

```js
const firstUniqChar = s => s.split('').findIndex((v, i) => s.indexOf(v) === s.lastIndexOf(v));
```

### 풀이 2. map을 활용

map을 선언하고 처음 등장한 문자라면 그 문자의 인덱스를 할당하고,  
두 번 이상 등장하는 문자라면 -1을 할당하였습니다.

흐름은 아래와 같습니다!

```
문자열이 'leetcode' 일 때,

map = {}

i = 0, s[i] = l
map = {
  l: 0
}

i = 1, s[i] = e
map = {
  l: 0,
  e: 1
}

i = 2, s[i] = e
map = {
  l: 0,
  e: -1 // e 중복
}

i = 3, s[i] = t
map = {
  l: 0,
  e: -1,
  t: 3
}

i = 4, s[i] = c
map = {
  l: 0,
  e: -1,
  t: 3,
  c: 4
}

i = 5, s[i] = o
map = {
  l: 0,
  e: -1,
  t: 3,
  c: 4,
  o: 5
}

i = 6, s[i] = d
map = {
  l: 0,
  e: -1,
  t: 3,
  c: 4,
  o: 5,
  d: 6
}

i = 7, s[i] = e
map = {
  l: 0,
  e: -1, // e 중복
  t: 3,
  c: 4,
  o: 5,
  d: 6
}

이후 map의 value에서 -1이 아닌 값 중 가장 작은 값을 idx에 할당합니다.
idx는 초기 값이 Infinity이며, map의 value를 순회 후 변화가 없다면 -1을 반환하게 됩니다.

```

```js
var firstUniqChar = function(s) {
  const map = new Map();
  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      map.set(s[i], -1);
    } else {
      map.set(s[i], i);
    }
  }
  let idx = Infinity;
  for(const value of map.values()) {
    if(value !== -1) idx = Math.min(value, idx);
  }
  return idx !== Infinity ? idx : -1;
};
```

### 풀이 3. 영상의 풀이

영상의 풀이를 활용하여 map에 등장한 문자의 숫자를 세는 방식으로 풀이하였습니다.  
흐름은 2번과 같지만 등장 횟수를 센다는 차이점이 있습니다.  
등장 횟수를 세지 않고 2나 -1처럼 중복임을 구분할 수 있는 값으로 변경해도 괜찮습니다 :)

```js
var firstUniqChar = function(s) {
  const map = new Map();
  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  for(let i = 0; i < s.length; i++) {
    if(map.get(s[i]) === 1) return i;
  }
  return -1;
};
```

## 2. Isomorphic Strings

### 풀이

영상의 풀이대로 접근하면 오답이 나와 두 개의 맵을 선언했습니다.  
각 문자열의 i번 째 값을 키로, 두 개의 문자를 합친 값을 value로 하여 잘못된 값인지 확인했습니다.  

풀이 보충 예정!

```js
var isIsomorphic = function(s, t) {
  const sMap = new Map();
  const tMap = new Map();
  for(let i = 0; i < s.length; i++) {
    if(sMap.has(s[i]) || tMap.has(t[i])) {
      if(sMap.get(s[i]) !== tMap.get(t[i])) return false;
    } else {
      sMap.set(s[i], s[i]+t[i]);
      tMap.set(t[i], s[i]+t[i]);
    }
  }
  return true;
};
```