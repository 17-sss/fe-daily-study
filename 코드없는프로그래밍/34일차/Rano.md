## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 07월 16일]

### **1.** Leetcode - Longest Common Subsequence

[문제: LeetCode - 1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)

**문제 요약**

-   text1과 text2의 longest common subsequence의 길이를 구하는 문제

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    const longestCommonSubsequence = (text1, text2) => {
        if (text1.length <= 0 || text2.length <= 0) return 0;

        const maxRowCnt = text1.length + 1;
        const maxColCnt = text2.length + 1;

        const arrDP = Array.from({ length: maxRowCnt }, () =>
            Array.from({ length: maxColCnt }, () => 0),
        );

        let currValue;
        for (let nRow = 1; nRow < maxRowCnt; nRow++) {
            const text1Char = text1[nRow - 1];
            for (let nCol = 1; nCol < maxColCnt; nCol++) {
                const text2Char = text2[nCol - 1];
                if (text1Char === text2Char) {
                    const prevRowColValue = arrDP[nRow - 1][nCol - 1] + 1;
                    currValue = prevRowColValue;
                } else {
                    const prevRowValue = arrDP[nRow - 1][nCol];
                    const prevColValue = arrDP[nRow][nCol - 1];
                    currValue = Math.max(prevRowValue, prevColValue);
                }

                arrDP[nRow][nCol] = currValue;
            }
        }

        return arrDP[maxRowCnt - 1][maxColCnt - 1];
    };
    console.log(longestCommonSubsequence('abdcg', 'bdag'));
    ```

**참고 이미지**

<img width="500" src="https://user-images.githubusercontent.com/33610315/125871414-a843ec36-1666-4671-b881-c7c3efb13d70.png"/>
