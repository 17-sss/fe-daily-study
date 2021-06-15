## 1. Valid Anagram

### 풀이

1. 두 문자열의 길이가 다르다면 Anagram이 될 수 없으므로 **false**를 리턴합니다. 
2. 두 개의 **Map**을 선언합니다.

```js
if(s.length !== t.length) return false;
const sMap = new Map();
const tMap = new Map();
```

3. 반복문을 통해 문자열 **s**와 **t**의 문자를 방문하여, 문자에 해당하는 값이 각 **map**에 존재하는지 확인합니다.  
   1. 존재하지 않는다면 그 문자를 **key**로 **value**에 **1**을 할당합니다.  
   2. 존재한다면 숫자를 셉니다.

```js
for(let i = 0; i < s.length; i++) {
  if(sMap.has(s[i])) {
    sMap.set(s[i], sMap.get(s[i]) + 1);
  } else {
    sMap.set(s[i], 1);
  }
  if(tMap.has(t[i])) {
    tMap.set(t[i], tMap.get(t[i]) + 1);
  } else {
    tMap.set(t[i], 1);
  }
}
```

4. 반복문을 통해 **s** 또는 **t**에 해당하는 **key**를 사용하여 두 **Map**을 확인하고, 숫자가 다르다면 **false**를 반환합니다.
5. 반복문이 종료될 때까지 반환되지 않으면 **true**를 반환합니다.

```js
for(let i = 0; i < s.length; i++) {
  if(sMap.get(s[i]) !== tMap.get(s[i])) return false;
}
return true;
```

흐름은 아래와 같습니다.

```
s = "anagram"
t = "nagaram" 일 때,

s.length === t.length 이므로 Anagram일 수 있음
sMap = {}
tMap = {}

i = 0, s[i] = a, t[i] = n
  각 Map에 존재하지 않으므로 1 할당
  sMap = {
    a: 1
  }
  tMap = {
    n: 1
  }
i = 1, s[i] = n, t[i] = a
  각 Map에 존재하지 않으므로 1 할당
  sMap = {
    a: 1,
    n: 1
  }
  tMap = {
    n: 1,
    a: 1
  }
i = 2, s[i] = a, t[i] = g
  sMap에는 존재하므로 +1 할당
  sMap = {
    a: 2,
    n: 1
  }
  tMap에는 존재하지 않으므로 1 할당
  tMap = {
    n: 1,
    a: 1,
    g: 1
  }
i = 3, s[i] = g, t[i] = a
  sMap에는 존재하지 않으므로 1 할당
  sMap = {
    a: 2,
    n: 1,
    g: 1
  }
  tMap에는 존재하므로 +1 할당
  tMap = {
    n: 1,
    a: 2,
    g: 1
  }
i = 4, s[i] = r, t[i] = r
  각 Map에 존재하지 않으므로 1 할당
  sMap = {
    a: 2,
    n: 1,
    g: 1,
    r: 1
  }
  tMap = {
    n: 1,
    a: 2,
    g: 1,
    r: 1
  }
i = 5, s[i] = a, t[i] = a
  두 Map에 존재하므로 +1 할당
  sMap = {
    a: 3,
    n: 1,
    g: 1,
    r: 1
  }
  tMap = {
    n: 1,
    a: 3,
    g: 1,
    r: 1
  }
i = 6, s[i] = m, t[i] = m
  각 Map에 존재하지 않으므로 1 할당
  sMap = {
    a: 3,
    n: 1,
    g: 1,
    r: 1,
    m: 1
  }
  tMap = {
    n: 1,
    a: 3,
    g: 1,
    r: 1,
    m: 1
  }

두번째 반복문
a
  sMap[a] === tMap[a] // 3 === 3
n
  sMap[n] === tMap[n] // 1 === 1
g
  sMap[g] === tMap[g] // 1 === 1
r
  sMap[r] === tMap[r] // 1 === 1
m
  sMap[m] === tMap[m] // 1 === 1

반복문이 종료될 때까지 반환되지 않았으므로 **true**를 반환
```

**코드**

```js
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  const sMap = new Map();
  const tMap = new Map();
  for(let i = 0; i < s.length; i++) {
    if(sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
    if(tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }
  for(const [key, value] of sMap.entries()) {
    if(value !== tMap.get(key)) return false;
  }
  return true;
};
```

## 2. Word Pattern

### 풀이

두 개의 Map을 선언해서 두 문자열을 각각 key로 사용하고, value는 합계를 입력하여 풀이했습니다.  

1. 문자열 **s**를 배열로 변환, pattern과 길이가 다르다면 return false로 예외처리 합니다.
2. 두 개의 Map을 선언합니다.

```js
s = s.split(' ');
if(s.length !== pattern.length) return false;
const sMap = new Map();
const pMap = new Map();
```

3. 반복문을 통해 문자열 **pattern**와 **s**의 요소를 방문하여, 요소에 해당하는 값이 각 **Map**에 존재하는지 확인합니다.  
   1. 존재한다면 맵에서 해당 **key**를 기준으로 값을 꺼내어 비교하여, 다를 경우 **false**를 반환합니다.
   2. 존재하지 않는다면 두 값을 **key**로, 두 값을 합친 값을 **value**로 저장합니다.

```js
for(let i = 0; i < s.length; i++) {
  if(sMap.has(s[i]) || pMap.has(pattern[i])) {
    if(sMap.get(s[i]) !== s[i] + pattern[i] || pMap.get(pattern[i]) !== s[i] + pattern[i]) return false;
  } else {
    sMap.set(s[i], s[i] + pattern[i]);
    pMap.set(pattern[i], s[i] + pattern[i]);
  }
}
```

4. 반복문이 종료될 때까지 반환되지 않으면 **true**를 반환합니다.

**코드**

```js
var wordPattern = function(pattern, s) {
  s = s.split(' ');
  if(s.length !== pattern.length) return false;
  const sMap = new Map();
  const pMap = new Map();
  for(let i = 0; i < s.length; i++) {
    if(sMap.has(s[i]) || pMap.has(pattern[i])) {
      if(sMap.get(s[i]) !== s[i] + pattern[i] || pMap.get(pattern[i]) !== s[i] + pattern[i]) return false;
    } else {
      sMap.set(s[i], s[i] + pattern[i]);
      pMap.set(pattern[i], s[i] + pattern[i]);
    }
  }
  return true;
};
```