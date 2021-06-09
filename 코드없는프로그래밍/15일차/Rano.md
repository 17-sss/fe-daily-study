## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 09일]

### **1.** Leetcode - Basic Calculator II

[문제: LeetCode - 227. Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)

**강의에서의 시나리오 및 메모**

**>** 시간복잡도: O(n) & 공간복잡도: O(n)

-   하나의 포인터로 인자로 들어온 문자열 s을 순회
    -   순회하면서 값을 넣어둘 stack 생성
    -   '\*' 이나 '/'를 넣을 strDivMul 생성
    -   연속되는 숫자를 계산할 strNum 생성
-   현재 포인터가 가르키는 곳이 숫자일 때, 다음 포인터가 가르키는 곳도 숫자인지 확인
-   '\*' 이나 '/' 일 때에는 먼저 계산
-   '+' 이나 '-' 일 때에는 이 연산자의 뒤에 들어오는 숫자는 양/음수를 판별.  
    '+' 일 떄는 stack에 빈 값을,  
    '-' 일 때는 - 를.  
-   마지막에 stack에 있는 값을 모두 합해주면서 종료

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {string} s
     * @return {number}
     */
    const calculate = (s) => {
        const stack = [];

        let strDivMul = '';
        let strPlusMinus = '';
        let strNum = '';

        let nIdx = 0;
        while (nIdx < s.length) {
            // 숫자 체크
            while (isNum(s[nIdx])) {
                strNum += s[nIdx]; // strNum이라는 변수에 현재 포인터 가르키고 있는 문자(숫자) in

                // 다음 포인터가 가르키는 곳에도 숫자라면 nIdx만 ++ (이 속에 있는 while문에서 빠져나가지 않고 계산을 위함)
                if (isNum(s[nIdx + 1])) nIdx++;
                else {
                    if (strDivMul) {
                        // 곱셉 or 나눗셈 있을 경우 먼저 계산
                        let nCalc;
                        const strNegative =
                            stack[stack.length - 1] < 0 ? '-' : '';
                        const absLastItem = Math.abs(stack[stack.length - 1]);
                        strDivMul === '*'
                            ? (nCalc = absLastItem * strNum)
                            : (nCalc = absLastItem / strNum);
                        stack[stack.length - 1] =
                            strNegative + Math.floor(nCalc);
                    } else {
                        // 숫자 만들어서 stack에 push
                        stack.push(strPlusMinus + strNum);
                    }
                    strNum = '';
                    strPlusMinus = '';
                    strDivMul = '';
                    break;
                }
            }

            // 연산자 체크
            if (isPlusMinus(s[nIdx])) strPlusMinus = s[nIdx];
            else if (isMulDiv(s[nIdx])) strDivMul = s[nIdx];

            nIdx++;
        }

        return stack.reduce(
            (result, curr) => ((result += Number(curr)), result),
            0,
        );
    };
    const isNum = (char) => /\d/g.test(char);
    const isPlusMinus = (char) => /\+|\-/g.test(char);
    const isMulDiv = (char) => /\*|\//g.test(char);
    ```
    - 통과 했으나 매우 느림 😭😭😭
    - 다음에 다시 풀어보는 걸로..

---

### **참고 링크**

**강의**

-   [코딩테스트, 중급, String Calculator](https://youtu.be/7Hf55tQR_O0)
