#### 28. Implement strStr()
https://leetcode.com/problems/implement-strstr/

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//indexOf()
const strStr = (haystack, needle) => haystack.indexOf(needle);
```
새롭게 알게된 점:
KMP라는 방법으로도 풀 수 있다. (제이슨의 풀이방법 다음에 자세히 공부해볼 것!)
indexOf는 빈문자열("")이 들어오면 빈문자열의 인덱스는 0이기 때문에 0을 반환한다.
그리고 일치되는 문자가 없을 경우 -1을 반환한다.

---

#### 796. Rotate String
https://leetcode.com/problems/rotate-string/

- 앞에서부터 한글자씩 떼어서 뒤로 붙인다음, goal이랑 똑같은 형태가 되면 true를 리턴.
- 다 돌았는데도 매치되는게 없다면 false.
+Plus: 조건을 변수에 담는 것을 flag라고 한다!
다만 while문 안에서는 flag를 쓸 수 없음! while문 내부에서 변경되는 변수일 경우 한번 돌고 끝나거나 무한루프 돌게됨. 아니라면 사용 가능.
```js
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = function(s, goal) {
    if (s.length <= 1) return s === goal;
    let str = moveFirstStrToLast(s);
    while(str !== s) {
        if (str === goal) return true;
        str = moveFirstStrToLast(str);
    }
    return false;
};

const moveFirstStrToLast = (str) => {
    const firstL = str.substring(0, 1);
    return `${str.substring(1, str.length)}${firstL}`;
}
```


