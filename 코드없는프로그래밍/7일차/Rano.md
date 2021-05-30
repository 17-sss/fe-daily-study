## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 05월 28일]

### **1.** Leetcode - Valid Palindrome

[문제: LeetCode - 125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {string} s
     * @return {boolean}
     */
    const isPalindrome = (s) => {
        if (!s) return true;
        // 알파벳, 숫자 제외하고 모두 제거
        s = s
            .replace(
                /[^a-zA-z\d]|[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"\_]/g,
                '',
            )
            .toLowerCase();

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            const strLeft = s[left];
            const strRight = s[right];
            if (strLeft === strRight) {
                left++;
                right--;
            } else return false;
        }
        return true;
    };
    ```

    -   정규표현식 활용 + 투 포인터

### **2.** Leetcode - Valid Palindrome II

[문제: LeetCode - 680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
    * @param {string} s
    * @return {boolean}
    */
    const validPalindrome = (s) => {
        if (!s) return true;

        // 알파벳, 숫자 제외하고 모두 제거
        s = s
            .replace(
                /[^a-zA-z\d]|[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"\_]/g,
                '',
            )
            .toLowerCase();

        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            const strLeft = s[left];
            const strRight = s[right];

            if (strLeft !== strRight)
                return (
                    oneMoreCheck(s, left + 1, right) ||
                    oneMoreCheck(s, left, right - 1)
                );
            left++;
            right--;
        }
        return true;
    };

    const oneMoreCheck = (s, left, right) => {
        while (left < right) {
            const strLeft = s[left];
            const strRight = s[right];

            if (strLeft !== strRight)
                return false;
            left++;
            right--;
        }
        return true;
    };
    ```

---

### **참고 링크**

**강의**

-   [코딩테스트, 기초, Palindrome](https://youtu.be/Yjgmw3rMof4)
