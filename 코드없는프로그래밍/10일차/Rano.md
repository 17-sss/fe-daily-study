## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 02일]

### **1.** Leetcode - Longest Substring Without Repeating Characters

[문제: LeetCode - 3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {string} s
     * @return {number}
     */
    const lengthOfLongestSubstring = (s) => {
        // 'abcdeca' -> 5
        // "pwwkew" -> 3 (4)
        const alphaMap = createAlphaMap(s);
        let maxLength = 0;
        let begin = 0,
            finish = 0;

        while (finish < s.length) {
            const currChar = s[finish];

            const beginNextIdx = alphaMap[currChar] + 1;
            if (begin + 1 <= beginNextIdx) begin = beginNextIdx;

            const tmpLength = finish - begin + 1;
            maxLength = Math.max(tmpLength, maxLength);
            alphaMap[currChar] = finish;

            finish++;
        }
        return maxLength;
    };

    lengthOfLongestSubstring('pwwkew');

    // --
    const createAlphaMap = () => {
        const result = {};
        const nStartLowerCase = 97;
        const alphaRange = 25;
        const max = nStartLowerCase + alphaRange;
        for (let i = nStartLowerCase; i <= max; i++) {
            const alpha = String.fromCharCode(i);
            result[alpha] = -1;
        }
        return result;
    };
    ```

---

### **참고 링크**

**강의**

-   [코딩테스트, 중급, Longest substring w/o Repeats](https://youtu.be/cFUgQKyTda4)
