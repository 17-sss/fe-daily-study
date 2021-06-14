## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 14일]

### **1.** Leetcode - First Unique Character in a String

[문제: LeetCode - 387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

-   단 1번만 나오는 Char의 Index를 반환하는 문제 / 아니라면 -1

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {string} s
     * @return {number}
     */
    const firstUniqChar = function (s) {
        const map = new Map();
        let nIdx = 0;
        while (s.length > nIdx) {
            const curr = s[nIdx];
            if (map.has(curr)) {
                let cnt = map.get(curr);
                map.set(curr, ++cnt);
            } else map.set(curr, 1);

            nIdx++;
        }

        const minAlpha = [...map.entries()].find((v) => v[1] === 1);
        return minAlpha ? s.split('').indexOf(minAlpha[0]) : -1;
    };
    ```

    -   Map & Array로 해결

-   코드 (2) : 통과 성공

    ```js
    /**
     * @param {string} s
     * @return {number}
     */
    const firstUniqChar = function (s) {
        const map = new Map();
        let nIdx = 0;
        while (s.length > nIdx) {
            const curr = s[nIdx];
            if (map.has(curr)) {
                let cnt = map.get(curr);
                map.set(curr, ++cnt);
            } else map.set(curr, 1);

            nIdx++;
        }

        nIdx = 0;
        while (s.length > nIdx) {
            const curr = s[nIdx];
            if (map.get(curr) === 1) return nIdx;
            nIdx++;
        }
        return -1;
    };

    firstUniqChar('loveleetcode'); // 2
    firstUniqChar('aabb'); // -1
    firstUniqChar('dddccdbba'); // 8
    ```

    -   Map과 2번의 반복문으로 해결
    -   위보다 조금 더 빠름

### **2.** Leetcode - Isomorphic Strings

[문제: LeetCode - 205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)

-   매개변수로 받아오는 s와 t가 같은 규칙을 가지며 써지고 있는지 확인하는 문제 (?)
    -   코딩해보니 두 매개변수 모두 Map이 필요할 듯

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    const isIsomorphic = (s, t) => {
        if (s.length !== t.length) return false;

        const map1 = new Map();
        const map2 = new Map();

        let nIdx = 0;
        while (nIdx < s.length) {
            const sChar = s[nIdx];
            const tChar = t[nIdx];

            if (map1.has(sChar) || map2.has(tChar)) {
                const v1 = map1.get(sChar);
                const v2 = map2.get(tChar);
                if (v1 !== tChar || v2 !== sChar) return false;
            } else {
                map1.set(sChar, tChar);
                map2.set(tChar, sChar);
            }
            nIdx++;
        }
        return true;
    };

    isIsomorphic('egg', 'add'); // true
    isIsomorphic('foo', 'bar'); // false
    isIsomorphic('badc', 'baba'); // false
    ```

### **참고 링크**

**강의**

-   [코딩 테스트, 초급, 문제풀이1,2](https://youtu.be/Z_-hZm-4WfA)