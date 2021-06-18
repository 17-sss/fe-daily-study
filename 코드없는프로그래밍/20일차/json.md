## 1. Top K Frequent Words

### 요약

주어진 배열 words에서 word의 빈도를 집계한 뒤, 가장 많이 등장하는 k개의 word를 반환하는 문제 입니다.  
요점은 같은 수가 등장했을 때, 알파벳 순서가 낮은 단어가 우선 순위를 가진다는 점!

### 풀이

1. **Map**을 선언합니다.
2. **word**의 빈도를 집계합니다.

```js
const map = new Map();
words.forEach(word => map.set(word, map.get(word) ? map.get(word) + 1 : 1));
```

2번 까지의 흐름은 아래와 같습니다.

```
words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]
k = 4 일 때, 

map = {}

word = the
map = {
  the: 1
}

word = day
map = {
  the: 1,
  day: 1
}

word = is
map = {
  the: 1,
  day: 1,
  is: 1
}

word = sunny
map = {
  the: 1,
  day: 1,
  is: 1,
  sunny: 1
}

word = the
map = {
  the: 2,
  day: 1,
  is: 1,
  sunny: 1
}

word = the
map = {
  the: 3,
  day: 1,
  is: 1,
  sunny: 1
}

word = the
map = {
  the: 4,
  day: 1,
  is: 1,
  sunny: 1
}

word = sunny
map = {
  the: 4,
  day: 1,
  is: 1,
  sunny: 2
}

word = is
map = {
  the: 4,
  day: 1,
  is: 2,
  sunny: 2
}

word = is
map = {
  the: 4,
  day: 1,
  is: 3,
  sunny: 2
}
```

3. **Map**에서 문제의 조건에 맞도록 정렬하기 위해 entries()와 spread 연산자를 사용하여 배열로 변환합니다.
4. 배열의 값을 문제의 조건에 맞도록 정렬합니다.

```js
const answer = [...map.entries()];
return answer.sort((a, b) => a[1] === b[1] ? (a[0] > b[0] ? 1 : -1) : a[1] > b[1] ? -1 : 1).map(v => v[0]).slice(0, k);
```

3 ~ 4번의 흐름은 아래와 같습니다.

```
answer = [
  ["the", 4],
  ["day", 1]
  ["is", 3],
  ["sunny", 2],
]

각 배열의 요소인 배열의 형태
[단어, 빈도]

빈도가 같다면 두 문자열을 사전 순으로 정렬
  a[1] === b[1] ? (a[0] > b[0] ? 1 : -1)

빈도가 다르다면 두 문자열을 빈도 순으로 정렬
  a[1] > b[1] ? -1 : 1

이후 단어를 기준으로 배열을 재생성한 뒤, k개 까지만 반환.
map(v => v[0]).slice(0, k)
```

**코드**

```js
var topKFrequent = function(words, k) {
  const map = new Map();
  words.forEach(word => map.set(word, map.get(word) ? map.get(word) + 1 : 1));
  const answer = [...map.entries()];
  return answer.sort((a, b) => a[1] === b[1] ? (a[0] > b[0] ? 1 : -1) : a[1] > b[1] ? -1 : 1).map(v => v[0]).slice(0, k);
};
```

## 2. Top K Frequent Elements

### 요약

1번 문제와 반환 전까지의 흐름은 동일합니다.  
어떤 순서로든 반환이 가능하기에 sort 조건이 간단합니다.

### 풀이

```js
var topKFrequent = function(nums, k) {
  const map = new Map();
  nums.forEach(num => map.set(num, map.get(num) ? map.get(num) + 1 : 1));
  const answer = [...map.entries()];
  return answer.sort((a, b) => b[1] - a[1]).map(v => v[0]).slice(0, k);
};
```