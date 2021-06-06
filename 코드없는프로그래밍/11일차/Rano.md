## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 03일]

### **1.** Leetcode - Valid Parentheses

[문제: LeetCode - 20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {string} s
     * @return {boolean}
    */
    const isValid = (s) => {
        const stack = [];
        const bracketMap = {
            '(': ')',
            '{': '}',
            '[': ']',
        };

        let nIdx = 0;
        const arrPush = Object.keys(bracketMap);

        while (nIdx < s.length) {
            const currChar = s[nIdx];
            const isPush = arrPush.indexOf(currChar) > -1;
            if (isPush)
                stack.push(currChar)
            else {
                const stackLastIdx = stack.length - 1;
                const stackLastItem = stack[stackLastIdx];
                const currPopValue = bracketMap[stackLastItem];

                if (currChar === currPopValue) stack.pop();
                else return false;
            }
            nIdx++;
        }
        return stack.length === 0;
    };
    ```
    - 시간복잡도가 쪼오금..

---

### **참고 링크**

**강의**

-   [코딩테스트, 기초, Stack](https://youtu.be/eu9ttD-psU4)
