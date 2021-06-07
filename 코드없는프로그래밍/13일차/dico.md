# 6월 7일 Remove Adjacent Duplicates

1047. Remove All Adjacent Duplicates In String
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

- 연속되는 문자를 삭제하고 남은 문자열을 반환하는 문제 = Stack을 사용하는 문제!
- "aaa"의 경우 "a"를 리턴한다.
- stack을 만들어 가장 위에 pointer가 가리키는 문자와 같은 문자열이 있다면 stack에서 pop을 해준다.
- 가리키는 문자와 가장 위 문자가 다를 경우 stack에 push를 해준다.

```js
/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
    }
    return stack.join("");
};
```

1209.  Remove All Adjacent Duplicates in String II
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

- 2개의 stack을 사용할 경우, O(N * K)에서 O(N)으로 시간 복잡도를 줄일 수 있다!
- pointer가 가리키고 있는 문자열이 stack의 가장 윗 문자와 같은 경우, count의 가장 위 숫자를 확인.
 1) count의 가장 위 숫자가 k보다 작을 경우, count의 숫자에 1을 더하고 해당 문자를 stack에 push.
 2) count의 가장 위 숫자가 k - 1인 경우, count의 숫자만큼 stack에서 pop하고, count에서도 가장 위 숫자를 pop한다.
- pointer가 가리키고 있는 문자열이 stack의 가장 윗 문자와 다른 경우, stack에 해당 문자를 push하고, count에도 1을 추가한다.

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function(s, k) {
    const stack = [];
    const count = [];

    for(let i = 0; i < s.length; i++) {
        if (s[i] === stack[stack.length - 1]) {
            if (count[count.length - 1] < k - 1) {
                count[count.length - 1]++;
                stack.push(s[i]);
            } else {
                stack.splice(1 - k);
                count.pop();
            }
        } else {
            //stack이 비어있을 때
            stack.push(s[i]);
            count.push(1);
        }
    }

    return stack.join('');
};
```


