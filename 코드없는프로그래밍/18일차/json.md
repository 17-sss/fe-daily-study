## 1. First Unique Character in a String

### 풀이 1. indexOf & lastIndexOf 활용

indexOf와 lastIndexOf를 활용하여 앞과 뒤가 같은 문자라면 해당하는 index를 반환합니다!

**코드**

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

**코드**

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

**코드**

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
각 문자열의 i번 째 값을 key로, 두 개의 문자를 합친 값을 value로 하여 잘못된 값인지 확인했습니다.  

1. 두 개의 Map을 선언 합니다.

```js
const sMap = new Map();
const tMap = new Map();
```

2. 반복문을 통해 문자열 **s**와 **t**의 문자를 방문하여, 문자에 해당하는 값이 각 **map**에 존재하는지 확인합니다.  
   1. 존재한다면 두 값을 비교하여, 다를 경우 **false**를 반환합니다.
   2. 존재하지 않는다면 두 값을 **key**로, 두 값을 합친 값을 **value**로 저장합니다.

```js
for(let i = 0; i < s.length; i++) {
  if(sMap.has(s[i]) || tMap.has(t[i])) {
    if(sMap.get(s[i]) !== tMap.get(t[i])) return false;
  } else {
    sMap.set(s[i], s[i]+t[i]);
    tMap.set(t[i], s[i]+t[i]);
  }
}
```

3. 반복문이 종료될 때까지 반환되지 않으면 **true**를 반환합니다.

흐름은 아래와 같습니다.

```
s = 'badc'
t = 'baba' 일 때,

sMap = {}
tMap = {}

i = 0, s[i] = b, t[i] = b
  map에 존재하지 않으므로 추가
  sMap = {
    b: bb
  }
  tMap = {
    b: bb
  }
i = 1, s[i] = a, t[i] = a
  map에 존재하지 않으므로 추가
  sMap = {
    b: bb,
    a: aa
  }
  tMap = {
    b: bb,
    a: aa
  }
i = 2, s[i] = d, t[i] = b
  둘 중 하나의 map에 존재하므로 비교
  sMap[d] = undefined
  tMap[b] = bb
  undefined !== bb 이므로 return false

--------------------------------------

s = 'paper'
t = 'title' 일 때,

sMap = {}
tMap = {}

i = 0, s[i] = p, t[i] = t
  map에 존재하지 않으므로 추가
  sMap = {
    p: pt,
  }
  tMap = {
    t: pt,
  }
i = 1, s[i] = a, t[i] = i
  map에 존재하지 않으므로 추가
  sMap = {
    p: pt,
    a: ai
  }
  tMap = {
    t: pt,
    i: ai
  }
i = 2, s[i] = p, t[i] = t
  둘 중 하나의 map에 존재하므로 비교
  sMap[p] = pt
  tMap[t] = pt
  pt === pt 이므로 continue
i = 3, s[i] = e, t[i] = l
  map에 존재하지 않으므로 추가
  sMap = {
    p: pt,
    a: ai,
    e: el
  }
  tMap = {
    t: pt,
    i: ai,
    l: el
  }
i = 4, s[i] = r, t[i] = e
  map에 존재하지 않으므로 추가
  sMap = {
    p: pt,
    a: ai,
    e: el,
    r: re
  }
  tMap = {
    t: pt,
    i: ai,
    l: el,
    e: re
  }

반복문이 종료되었으므로 return true
```

**코드**

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