### Group Anagrams
49. Group Anagrams https://leetcode.com/problems/group-anagrams/

방법 1.
- hashmap이란, key값을 인덱스로 바꾸고, js에는 hashmap이 없으므로 직접 구현해야 하므로 new Map()을 사용한다.
-  = has(key), set(key, value), get(key) 메서드 활용
- strs를 순회하면서 요소를 sorting하여 sorting된 값을 hashmap의 key로 저장한다.
- sorting된 문자열을 기준으로 해당 key에 value로 넣어준다.
- 완성된 hashmap을 순회하면서 answer 배열에 value배열을 담아 2중 배열로 만든후 반환한다.

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const hashMap = new Map();

  strs.forEach(str => {
    const key = str.split('').sort().join('');
    if (hashMap.has(key)) {
        hashMap.get(key).push(str);
    } else {
        hashMap.set(key, [str]);
    }
  })
  console.log("hashmap", [...hashMap.values()])  //hashmap [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
  return [...hashMap.values()];
};

```

방법 2.
- 각 문자열에서 등장하는 알파벳 갯수를 hash에 저장하고, 등장한 갯수와 알파벳의 조합으로 key를 만든다. (ex. bab => a1b2)
- hash에서 값이 0이 아닌 알파벳만 뽑아서 key를 만든다.
- 그리고 hashMap에 key-value로 저장한다.

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
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

  const hashMap = new Map();

  strs.forEach(str => {
    for(let i = 0; i < str.length; i++) {
      const letter = str[i];
      hash[letter]++;
    }

    let key = '';
    for (let k in hash) {
      if(hash[k]) {
        key = `${key}${k}${hash[k]}`;
        hash[k] = 0;
      }
    }
    if (hashMap.has(key)) {
        hashMap.get(key).push(str);
    } else {
        hashMap.set(key, [str]);
    }
  })
  return [...hashMap.values()]
}
```
----

### 오늘 배운 점:
1) 문자열은 split('')해서 배열화 시켜줘야만 sort()를 할 수 있다!!
```js
let a = "lkjsldjf";
a.split('').sort();
```
2) hashMap.values()는 각 value들을 요소로 가진 iterator객체로 반환한다. {[], [], []...}
spread 연산자를 이용하면, 해당 iterator객체를 이중 배열로 저장할 수 있게 된다. 
```js
[...hashMap.values()]
```