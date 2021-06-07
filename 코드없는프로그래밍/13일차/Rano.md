## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 07일]

### **1.** Leetcode - Remove All Adjacent Duplicates In String

[문제: LeetCode - 1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {string} s
     * @return {string}
     */
    const removeDuplicates = (s) => {
        const stack = [];
        let nIdx = 0;
        while (nIdx < s.length) {
            if (stack[stack.length - 1] === s[nIdx]) stack.pop();
            else stack.push(s[nIdx]);
            nIdx++;
        }
        return stack.join('');
    };
    ```

    -   매개변수로 들어오는 `s`를 `s.length`만큼 순회하면서  
         현재 `stack`에 들어갈 문자 하나가 이미 `stack`에 들어있다면 **pop** 해주어야 함!  
         일반적인 경우엔 `stack`에 **push**!

### **2.** Leetcode - Remove All Adjacent Duplicates In String II

[문제: LeetCode - 1209. Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    const removeDuplicates = (s, k) => {
        const stack = [];
        const countStack = [];

        let nIdx = 0;
        while (nIdx < s.length) {
            const stackLast = stack[stack.length - 1];

            // 만약 현재 문자(s[nIdx])가 stack의 마지막 아이템과 같다면
            if (stackLast === s[nIdx]) {
                // 현재 문자의 갯수(countStack[countStack.length - 1])가 k와 같아지면 안되니까 k-1로 비교
                if (k - 1 === countStack[countStack.length - 1]) {
                    for (let i = 0; i < k - 1; i++) stack.pop(); // k-1 만큼 stack에서 pop
                    countStack.pop(); // 현재 문자의 갯수(countStack[countStack.length - 1])도 pop
                }
                // k-1과 같지 않을땐 stack에 현재문자 push / countStack[countStack.length - 1]은 ++
                else {
                    stack.push(s[nIdx]);
                    countStack[countStack.length - 1]++;
                }
            } else {
                // 일반적인 경우엔
                stack.push(s[nIdx]); // stack에는 현재 문자(s[nIdx])를 push
                countStack.push(1); // countStack은 1을 push (현재 문자의 count 초기화)
            }
            nIdx++;
        }

        return stack.join('');
    };
    ```

    -   들어오는 매개변수 `k`만큼 매개변수 `s`내에서 중복되는 문자를 제거하는 문제.
    -   2개의 stack이 필요!
        -   메인 stack
        -   중복을 체크할 stack 필요

---

### **+** 메모

-   만약 챕터의 힌트가 없었다면 풀기 힘들었을 것!  
     Array나 String 문제를 _정렬_, _투 포인터_, _바이너리 서치_ 말고도  
     _stack_ 으로 해결할 생각도 해보기!

### **참고 링크**

**강의**

-   [코딩테스트, 초급, Remove Adjacent Duplicates](https://youtu.be/EU7ISz76xjw)
