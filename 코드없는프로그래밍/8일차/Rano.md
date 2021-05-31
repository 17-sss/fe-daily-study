## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 05월 31일]

### **1.** Leetcode - Add Strings

[문제: LeetCode - 415. Add Strings](https://leetcode.com/problems/add-strings/)

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */

    // const addStrings = (num1, num2) => (parseInt(num1) + parseInt(num2)) + '';  // 안됨

    const addStrings = (num1, num2) => {
        const nMaxLength = Math.max(num1.length, num2.length);
        if (!nMaxLength) return;

        num1 = num1.padStart(nMaxLength, '0');
        num2 = num2.padStart(nMaxLength, '0');

        let resultTmp = '';
        let carry = 0;
        let nLoop = 0;
        let currIdx = nMaxLength - 1;

        while (nLoop < nMaxLength && currIdx > -1) {
            const value1 = Number(num1[currIdx]);
            const value2 = Number(num2[currIdx]);
            const sum = value1 + value2 + carry;
            resultTmp += sum % 10;
            carry = Math.floor(sum / 10);

            nLoop++;
            currIdx--;
        }
        carry !== 0 && (resultTmp += carry);

        // 배열 reverse쓰면 아찔..
        let result = '';
        let nReverse = resultTmp.length - 1;
        while (0 <= nReverse) {
            result += resultTmp[nReverse];
            nReverse--;
        }

        return result;
    };
    ```

---

### **참고 링크**

**강의**

-   [코딩 테스트, 초급, Add Strings](https://youtu.be/9RkQ4CmXHKY)
