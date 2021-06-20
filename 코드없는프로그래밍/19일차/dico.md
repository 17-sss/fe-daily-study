## 문제1
242. Valid Anagram <br>
https://leetcode.com/problems/valid-anagram/


시간복잡도: O(N) <br>
공간복잡도: O(1)

1) 가장 먼저 s와 t의 길이가 서로 같은지를 비교한다. anagram은 등장하는 알파벳의 횟수가 동일해야 하기 때문에 길이가 다르면 false를 바로 반환하면 된다.
2) s를 순회허면서 hash1 안에 key-value로 알파벳-등장횟수를 저장한다. (+1)
3) t를 순회하면서 hash1 안에 해당 key가 가진 value를 하나씩 빼준다. (-1)
4) t를 끝까지 모두 순회한 후에 hash1의 value가 모두 0이라면 true, 아니라면 false를 반환한다.
5) s가 기준인 경우 hash1과, t가 기준인 경우 hash2가 필요하다.

```js
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false; //1)
   const hash1 = new Map();
   const hash2 = new Map();

  for(let i = 0; i < s.length; i++) {
    hash1.has(s[i]) ? hash1.set(s[i], hash1.get(s[i]) + 1) : hash1.set(s[i], 1);
    hash2.has(t[i]) ? hash2.set(t[i], hash2.get(t[i]) + 1) : hash2.set(t[i], 1);
  }

  for(let j = 0; j < s.length; j++) {
    hash1.has(t[j]) ? hash1.set(t[j], hash1.get(t[j]) - 1) : hash1.set(t[j], 1);
    hash2.has(s[j]) ? hash2.set(s[j], hash2.get(s[j]) - 1) : hash2.set(s[j], 1);
  }

  for(let z = 0; z < s.length; z++) {
    if (hash1.get(s[z]) || hash2.get(s[z])) return false;
  }

  return true;
};
```
- 처음에는 forEach로 접근했으나 인덱스를 사용하지 못해 반복문을 불필요하게 많이 돌게 됨.

----

## 문제2

290. Word Pattern <br>
https://leetcode.com/problems/word-pattern/

시간복잡도: O(N) <br>
공간복잡도: O(1)

- 띄어쓰기를 기준으로 s 문자열을 배열로 변환한다.
- pattern의 길이만큼 반복문을 실행해 hashmap에 key-value로 pattern[i] - s[i]를 저장한다.
- hashmap을 돌면서 해당 key에 동일한 value가 나오지 않을 경우, false를 리턴한다.

```js
const wordPattern = function(pattern, s) {
  const hashmap = new Map();
  const hashmap2 = new Map();

  s = s.split(' ');
  pattern = pattern.split('');
  if(s.length !== pattern.length) return false; //예외처리

  for(let i = 0; i < s.length; i++) {
    if(!hashmap.has(pattern[i])) {
      hashmap.set(pattern[i], s[i]);
      console.log("hashmap.get(pattern[i])", hashmap.get(pattern[i]))
    } else {
      if (hashmap.get(pattern[i]) !== s[i]) return false; //틀린 value가 나온다면 false
    }
  }

  for(let j = 0; j < pattern.length; j++) {
    if(!hashmap2.has(s[j])) {
      hashmap2.set(s[j], pattern[j]);
    } else {
      if (hashmap2.get(s[j]) !== pattern[j]) return false;
    }
  }

  return true;
};
```
