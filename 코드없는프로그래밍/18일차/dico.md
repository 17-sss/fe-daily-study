## hashmap: 코딩 테스트, 초급, 문제풀이1,2

### 첫번째 문제
387. First Unique Character in a String<br>
https://leetcode.com/problems/first-unique-character-in-a-string/

- O(N), O(1)
- 반복되지 않은 문자열 중 가장 첫번째 문자열의 인덱스를 리턴한다.
- s의 loop를 돌면서 알파벳과 등장횟수를 key-value로 hashMap에 저장한다.
- 저장된 hashMap의 loop를 돌면서 등장횟수가 1이면 해당 알파벳의 인덱스를 리턴한다.

```js
const firstUniqChar = function(s) {
  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!hashMap.has(s[i])) {   //해당 key가 없다면
      hashMap.set(s[i], 1);
    } else {                    //해당 key가 있다면
      const val = hashMap.get(s[i]);
      hashMap.set(s[i], val + 1);
    }
  }

  const set = hashMap.entries();
  for(let key of set) {
    if (key[1] === 1) {
      return s.indexOf(key[0]);
    }
  }

  return -1;
};

```
### 두번째 문제
205. Isomorphic Strings<br>
https://leetcode.com/problems/isomorphic-strings/

- O(N), O(1)
- 두개의 문자열이 같은 패턴을 가졌는지 여부를 boolean으로 반환하는 문제.
- loop를 돌면서 첫번째 문자열의 글자는 key로, 두번째 문자열의 글자는 value로 hashMap에 저장한다.
- 한번 저장된 key-value는 동일하게 match가 되어야 하므로 매 loop마다 hashMap에 해당 key-value가 같은지 확인하여 같지 않을 경우 false를 리턴, 모두 같으면 true를 반환한다.

```js
const isIsomorphic = function(s, t) {
    const hash1 = new Map();
    const hash2 = new Map();

    for(let i = 0; i < s.length; i++) {
      if(!hash1.has(s[i])) {  //해당 key가 없다면
        hash1.set(s[i], t[i]);
      } else {            //해당 key가 있다면 value와 t[i]가 같은지 확인
        if (hash1.get(s[i]) !== t[i]) return false;
      }
    }

    for(let i = 0; i < t.length; i++) {
      if(!hash2.has(t[i])) {  //해당 key가 없다면
        hash2.set(t[i], s[i]);
      } else {            //해당 key가 있다면 value와 t[i]가 같은지 확인
        if (hash2.get(t[i]) !== s[i]) return false;
      }
    }

    return true;
};
```
### 오늘 배운 점
- Map 한개로만 했을 때는 두번째 for문을 돌 때, 이미 특정 알파벳의 value로 다른 알파벳이 들어있을 수 있다. ex) paper, title
- 따라서 별도의 Map을 만드는 방법(Map을 2개 만들기)으로 접근하는 것이 용이.