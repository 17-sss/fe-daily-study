## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 07월 06일]

### **1.** Leetcode - Palindromic Substrings

[문제: LeetCode - 647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)

**문제 요약**

-   주어진 string s에서, 가장 긴 palindromic substring을 반환하는 문제

**코드**

-   코드 : 통과 실패

    ```js
    /**
     * @param {string} s
     * @return {string}
     */
    const longestPalindrome = (s) => {
        const S_LENGTH = s.length;
        const arrDP = Array.from({length: S_LENGTH}, () => Array.from({length: S_LENGTH}, () => -1 ) );

        for (let nRowCol = 0; nRowCol < arrDP.length; nRowCol++) {
            const currRow = arrDP[nRowCol];
            currRow[nRowCol] = 0;
        }

        for (let nRow = 0; nRow < arrDP.length; nRow++) {
            const currRow = arrDP[nRow];
            const currRowStr = s[nRow];
            for (let nCol = (nRow + 1); nCol < currRow.length; nCol++) {
                const currColStr = s[nCol];
                if (currColStr === currRowStr) currRow[nCol] = nCol;
                else currRow[nCol] = -1;
            }
        }

        const valueSet = arrDP.reduce((accu, arr) => {
            arr.forEach((v) => accu.add(v));
            return accu;
        }, new Set());
        const minValue = Math.min(...valueSet.values()) === -1 ? 0 : Math.min(...valueSet.values());
        const maxValue = Math.max(...valueSet.values());

        return s.slice(minValue, maxValue + 1);
    };
    ```

-   코드 : 참고, 나중에 풀어보기 - 5500ms..? 

    ```js
    /**
     * @param {string} s
     * @return {string}
     */
    const longestPalindrome = (s) => {
        const S_LENGTH = s.length;
        const arrDP = Array.from({ length: S_LENGTH }, () => Array.from({ length: S_LENGTH }, () => 0));

        for (let idx = 0; idx < S_LENGTH; idx++) {
            const currRow = arrDP[idx];
            currRow[idx] = 1;
        }

        for (let idx = 0; idx < S_LENGTH - 1; idx++) {
            const startChar = s[idx];
            const endChar = s[idx + 1];
            if (startChar === endChar) arrDP[idx][idx + 1] = 2;
        }

        for (let idx = 2; idx < S_LENGTH; idx++) {
            let row = 0;
            let col = idx;

            while (col < S_LENGTH) {
                const startChar = s[row];
                const endChar = s[col];
                const prevCnt = arrDP[row + 1][col - 1];

                if (startChar === endChar && prevCnt !== 0)
                    arrDP[row][col] = prevCnt + 2;

                row += 1;
                col += 1;
            }
        }

        let maxLength = 0;
        let startIdx = 0;
        let endIdx = 0;

        for (let row = 0; row < S_LENGTH; row++) {
            for (let col = 0; col < S_LENGTH; col++) {
                const currRowColLength = arrDP[row][col];
                if (maxLength < currRowColLength) {
                    maxLength = currRowColLength;
                    startIdx = row;
                    endIdx = col;
                }
            }
        }

        return s.slice(startIdx, endIdx + 1);
    };
    ```

**끄적끄적**

-   전혀 이해 못한 문제.. 나중에 다시 풀어보도록 하겠습니다 ㅠ
