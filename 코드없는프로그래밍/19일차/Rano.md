## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 15일]

### **1.** Leetcode - Valid Anagram

[문제: LeetCode - 242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

-   매개변수로 받아오는 문자열들이 같은 문자들로 이루어져있는지 확인하는 문제

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    const isAnagram = (s, t) => {
        if (s.length !== t.length) return false;
        const map = new Map();
        const nMax = s.length;

        // 1) Map에 매개변수 s의 글자들을 분석 (Count++)
        let nIdx = 0;
        while (nIdx < nMax) {
            const sCnt = map.get(s[nIdx]);
            isNull(sCnt) ? map.set(s[nIdx], 1) : map.set(s[nIdx], sCnt + 1);
            nIdx++;
        }

        // 2) 매개변수 t를 기준으로 Map에 있는 글자 Count--
        nIdx = 0;
        while (nIdx < nMax) {
            if (!map.has(t[nIdx])) return false;
            map.set(t[nIdx], map.get(t[nIdx]) - 1);

            if (map.get(t[nIdx]) < 0) return false;
            nIdx++;
        }

        return true;
    };
    const isNull = (value) =>
        typeof value === 'undefined' || typeof value === 'null';

    // isAnagram('anagram', 'nagaram'); // true
    isAnagram('aacc', 'ccac'); // false
    ```

### **2.** Leetcode - Word Pattern

[문제: LeetCode - 290. Word Pattern](https://leetcode.com/problems/word-pattern/)

-   매개변수 문자열 s가 문자열 pattern과 같은 패턴을 가지고있다면 true

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    const wordPattern = (pattern, s) => {
        const arrS = s.split(' ');
        if (arrS.length !== pattern.length) return false;

        const map = new Map();

        let nIdx = 0;
        while (nIdx < pattern.length) {
            const currPattern = pattern[nIdx];
            // 1) 이미 등록된 패턴(키)이 있을 경우
                // 현재 들어오는 배열 arrS (매개변수 s)의 현재 loopIndex(nIdx)에 위치한 아이템과
                // 등록된 패턴의 value 값을 비교하여 다르다면 false 반환
            if (map.has(currPattern)) {
                if (map.get(currPattern) !== arrS[nIdx]) return false;
            } else {
                // 2-1) 현재 set되려는 key, value가 이미 map에 들어간 key에서 같은 Value를 쓰고 있는지 체크
                // 이미 쓰고있다면 false 반환
                const isDifferKeySameValue =
                    [...map.entries()].findIndex(
                        ([key, value]) =>
                            key !== currPattern && value === arrS[nIdx],
                    ) > -1;

                if (isDifferKeySameValue) return false;

                // 2-2) 2-1과 부합하지 않다면 패턴(키)와 배열 arrS의 nIdx에 위치한 아이템(값)을 등록
                map.set(currPattern, arrS[nIdx]);
            }

            nIdx++;
        }

        return true;
    };

    // wordPattern("abba", "dog cat cat dog"); // true
    wordPattern('abba', 'dog dog dog dog'); // false
    ```

### **참고 링크**

**강의**

-   [코딩 테스트, 초급, 문제풀이3,4](https://youtu.be/YnNjM-PVtwg)
