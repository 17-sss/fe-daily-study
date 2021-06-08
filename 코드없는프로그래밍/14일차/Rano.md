## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 08일]

### **1.** Leetcode - Decode String

[문제: LeetCode - 394. Decode String](https://leetcode.com/problems/decode-string/)

**시나리오**

`a2[b2[ak]]`라면..

-   문자 전용 Stack / Count 전용 Stack 생성
-   하나의 포인터로 인자로 들어온 값(문자열)을 순회
-   문자면 문자용 Stack에, 숫자면 숫자 전용 Stack에 push
-   `[` 면 문자용 스택에 비어있는 문자 `''`를 push
-   `]` 면 문자용 스택 & 숫자용 스택의 top에 있는 것들을 pop하여 문자 계산

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {string} s
     * @return {string}
     */
    const decodeString = (s) => {
        const stack = [];
        const cntStack = [];
        let strNum = '';
        let nIdx = 0;

        while (nIdx < s.length) {
            const curr = s[nIdx];

            if (isAlpha(curr)) {
                !nIdx && stack.push('');
                stack[stack.length - 1] = stack[stack.length - 1] + curr;
            } else if (isNum(curr)) strNum += curr;
            else if (curr === '[') {
                stack.push('');
                strNum && (cntStack.push(strNum), (strNum = ''));
            } else if (curr === ']') {
                const char = stack.pop();
                const num = cntStack.pop();

                !stack.length && stack.push('');
                num > 0 && (stack[stack.length - 1] += char.repeat(num));
            }
            nIdx++;
        }
        return stack[0];
    };

    const isNum = (char) => /\d/g.test(char);
    const isAlpha = (char) =>
        typeof char !== 'undefined' && /[a-zA-Z]/g.test(char);
    ```

---

### **+** 메모 및 회고

-   괄호가 보인다면 stack approach를 생각해본다.
-   그냥 강의보고 풀었는데 이해가 잘 안갑니다..

### **참고 링크**

**강의**

-   [코딩테스트, 중급, Decode String](https://youtu.be/kEOIOoJ2keo)
