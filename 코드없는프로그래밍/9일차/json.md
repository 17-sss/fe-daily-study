## Group Anagrams

## 코드스쿼드 데일리 스터디

### 풀이 1. sort

sort를 활용하여 문자를 정렬한 값을 키로 활용하여 풀이했습니다.  
접근 방법은 아래와 같습니다!

```
1. 반복문을 통해 개별 문자열(str)에 접근
2. sortStr을 통해 개별 문자열을 sort
  sortStr의 로직
    예) 문자열이 'eat'일 때,
      'eat'를 ''를 기준으로 스플릿 => ['e', 'a', 't']
      ['e', 'a', 't'] 를 오름차 순으로 sort => ['a', 'e', 't']
      ['a', 'e', 't'] 를 ''로 join => 'aet'
      'eat' ==> 'aet'
3. sortStr로 변환된 문자열의 키 값을 가진 프로퍼티가 map에 있는지 확인 (맵은 편의상 object로 선언!)
  1. 있다면 그 프로퍼티에 str(원본 문자열)을 추가
  2. 없다면 sortStr을 키로 만든 배열에 str문자열을 추가

strs = ["eat","tea","tan","ate","nat","bat"]
strs.forEach
  step 1 str = 'eat'
    sortStr = 'aet'
    map = {
      aet: ['eat']
    }
  step 2 str = 'tea'
    sortStr = 'aet'
    map = {
      aet: ['eat', 'tea']
    }
  step 3 str = 'tan'
    sortStr = 'ant'
    map = {
      aet: ['eat', 'tea'],
      ant: ['tan']
    }
  step 4 str = 'ate'
    sortStr = 'aet'
    map = {
      aet: ['eat', 'tea', 'aet'],
      ant: ['tan']
    }
  step 5 str = 'nat'
    sortStr = 'ant'
    map = {
      aet: ['eat', 'tea', 'aet'],
      ant: ['tan', 'nat']
    }
  step 6 str = 'bat'
    sortStr = 'abt'
    map = {
      aet: ['eat', 'tea', 'aet'],
      ant: ['tan', 'nat'],
      abt: ['bat']
    }
이후 map의 밸류값으로 된 배열을 반환!
Object.values(map) === [['eat', 'tea', 'aet'], ['tan', 'nat'], ['bat']]
```

```js
var groupAnagrams = function (strs) {
  const map = {};
  strs.forEach((str) => {
    const sortStr = str.split('').sort().join('');
    map[sortStr] = map[sortStr] ? [...map[sortStr], str] : [str];
  });
  return Object.values(map);
};
```

### 풀이 2. 카운트 활용

영상에서 소개된대로 sort대신 카운트를 활용하여 풀이했습니다.  
sort를 사용하지 않는 대신 hash를 사용하는 부분만 제외하고 전체적인 흐름은 같습니다!

```js
const hash = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};
var groupAnagrams = function (strs) {
  const result = {};
  strs.forEach((str) => {
    const map = { ...hash };
    for (let i = 0; i < str.length; i++) {
      map[str[i]] += 1;
    }
    const key = Object.keys(map).reduce(
      (acc, cur) => (map[cur] > 0 ? acc + cur + map[cur] : acc),
      ''
    );
    result[key] = result[key] ? [...result[key], str] : [str];
  });
  return Object.values(result);
};
```
