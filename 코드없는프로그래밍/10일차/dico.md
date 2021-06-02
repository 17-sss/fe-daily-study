### Longest substring w/o Repeats
3. Longest Substring without Repeating Characters [https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

#### Brute Force 방식
- 시작점과 끝점을 잡아서 2중 for문으로 substring의 길이와 반복을 체크한다.
- 하나의 포인터가 계속 오른쪽으로 움직이며, 자리를 지키고 있던 나머지 하나의 포인터와 움직이는 포인터가 같은 알파벳을 가리킬 때, 나머지 포인터가 한 칸씩 움직인다.
- 즉, 겹치는 순간 왼쪽 포인터가 오른쪽으로 하나씩 움직인다.
- O(N ^ 3)
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let str = "";

    for (let i = 0; i < s.length; i++) {
         str = s[i]; //a
        for(let j = i + 1; j < s.length; j++) {
            for(let k = 0; k < str.length; k++) {
                if (str[k] === s[j]) {
                    max = Math.max(str.length, max); //기존 max와 비교해서 큰 경우에만 할당하기
                    str = "";
                    break;
                }
            }
            str += s[j];
        }
        max = Math.max(str.length, max);
    }
    return Math.max(str.length, max);
};
```

#### Two Pointer 방식
- MaxLength = 0; begin = 0; finish = 0 로 시작한다.
- 모든 알파벳을 key로 가지고 있는 object를 만든다. 초기값은 모두 -1로 준다.
- begin과 finish는 포인터가 되어서 하나씩 움직인다.
- finish를 하나씩 올려주면서 각 알파벳의 value가 -1 이 아닐 경우, begin을 value + 1로 갱신한다.
- value에는 finish의 위치를 새로 저장해준다.
- finish를 올리기 전, MaxLength(finish - begin +1)를 정정한다.
- 시간복잡도: O(N), 공간복잡도: O(M)

- 실패한 코드
```js
const obj = {
  a: -1,
  b: -1,
  c: -1,
  d: -1,
  e: -1,
  f: -1,
  g: -1,
  h: -1,
  i: -1,
  j: -1,
  k: -1,
  l: -1,
  m: -1,
  n: -1,
  o: -1,
  p: -1,
  q: -1,
  r: -1,
  s: -1,
  t: -1,
  u: -1,
  v: -1,
  w: -1,
  x: -1,
  y: -1,
  z: -1,
};

const lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    begin = 0;
    finish = 0;

    for(let i = 0; i < s.length; i++) {
        maxLength++;
        finish = i;
        const idx = obj[s[i]];
        if (idx !== -1) obj[s[finish]] = finish;
        if (s[begin] === s[finish]) {
            begin = idx + 1;
            maxLength = Math.max(maxLength, finish - begin + 1)
        }
        // maxLength = finish - begin + 1;
    }
}
```
- 통과한 코드
```js
const lengthOfLongestSubstring = function(s) {
    const obj = {
      a: -1,
      b: -1,
      c: -1,
      d: -1,
      e: -1,
      f: -1,
      g: -1,
      h: -1,
      i: -1,
      j: -1,
      k: -1,
      l: -1,
      m: -1,
      n: -1,
      o: -1,
      p: -1,
      q: -1,
      r: -1,
      s: -1,
      t: -1,
      u: -1,
      v: -1,
      w: -1,
      x: -1,
      y: -1,
      z: -1,
    };

    let maxLength = 0;
    let begin = 0;

    for(let i = 0; i < s.length; i++) {
        if (begin <= obj[s[i]]) {
            begin = obj[s[i]] + 1;
        }
        obj[s[i]] = i;
        maxLength = Math.max(maxLength, i - begin + 1)
    }
    return maxLength;
}
```
<오늘 배운점>
- leetcode는 전역변수를 취급하지 않는다. 함수 내부에 선언할 것!!!! ㅠㅠㅠ
- begin과 i 사이에 이미 해당 알파벳이 등장했는지의 여부를 판단하는 조건: `begin <= obj[s[i]]`
