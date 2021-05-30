## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 05월 27일]

### **1.** Leetcode - Implement strStr()

[문제: LeetCode - 28. Implement strStr()](https://leetcode.com/problems/implement-strstr/)

-   KMP 알고리즘은 무엇인고..?
    -   제쓴의 KMP 풀이가 많이 도움이 되었습니다!  
        나중에 다시보고 풀어볼 예정!
-   분명 강의의 의도는 이게 아닌데 `indexOf`로만 풀이..

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    const strStr = (haystack, needle) => haystack.indexOf(needle);
    ```

    -   `indexOf` 활용하여 풀이

### **2.** Leetcode - Rotate String

[문제: LeetCode - 796. Rotate String](https://leetcode.com/problems/rotate-string/)

-   이 문제에서도 강의는 다른 의도였던 것 같은데..

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {string} s
     * @param {string} goal
     * @return {boolean}
     */
    const moveLeft = (str) => str.slice(1, str.length) + str[0];

    const rotateString = (s, goal) => {
        if (s.length <= 1) return s === goal;
        // moveLeft 라는 함수 필요
        let startStr = moveLeft(s); // abcde

        // startStr은 계속 돌아가야하니까!
        // abcde |  bcdea, cdeab, deabc, eabcd,      abcde

        while (startStr !== s) {
            // goal === startStr => return true
            if (startStr === goal) return true;
            startStr = moveLeft(startStr);
        }

        return false;
    };

    rotateString('abcde', 'cdeab');
    ```

---

### **참고 링크**

**강의**

-   [KMP 알고리즘, 기초, String Matching](https://youtu.be/UcjK_k5PLHI)
