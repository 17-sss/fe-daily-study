## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 01일]

### **1.** Leetcode - Group Anagrams

[문제: LeetCode - 49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

**코드**

-   코드 (1) : 통과 성공

    ```js
    /**
    * @param {string[]} strs
    * @return {string[][]}
    */
    const calcAlphaCnt = (arrStr, searchChar) =>
        arrStr.reduce((cnt, currChar) => (currChar === searchChar && cnt++, cnt), 0);
    const isDuplicateKey = (object, key) => Object.keys(object).indexOf(key) > -1;
    const createSortedObjectKey = (object) => {
        const result = {};
        const keys = Object.keys(object).sort();

        keys.forEach((key) => {
            result[key] = object[key];
        });
        return result;
    };
    const createObjectValueKey = (object) => Object.keys(object).reduce((result, key) => (result += (key + object[key]), result), '');

    const groupAnagrams = (strs) => {
        const listMap = {};

        let nLoop = 0;
        while (nLoop < strs.length) {
            const currStr = strs[nLoop];
            const arrCurrStr = currStr.split('');

            const tmpMap = {};
            for (let i = 0; i < arrCurrStr.length; i++) {
                const tmpChar = arrCurrStr[i];
                if (isDuplicateKey(tmpMap, tmpChar)) continue;

                const alpCnt = calcAlphaCnt(arrCurrStr, tmpChar);
                tmpMap[tmpChar] = alpCnt;
            }

            const strKey = createObjectValueKey(createSortedObjectKey(tmpMap));

            if (isDuplicateKey(listMap, strKey)) listMap[strKey].push(currStr);
            else listMap[strKey] = [currStr];

            nLoop++;
        }

        return Object.values(listMap);
    };

    groupAnagrams(['aba', 'cbc', 'baa', 'adc', 'ccd', 'bb']);
    ```
    - 통과 성공 했으나, 끔찍!!!!
        - 시간: 5372 ms (5.02%)
        - 공간: 57.7 MB (5.02%)

-   코드 (2) : 통과 성공 

    ```js
    const groupAnagrams = (strs) => {
        const listMap = {};
        const AT = new AlphaTable();

        let nLoop = 0;
        while (nLoop < strs.length) {
            const currStr = strs[nLoop];
            const tmpMap = AT.createAlphaMap();

            for (let i = 0; i < currStr.length; i++) {
                const tmpChar = currStr[i];
                tmpMap[tmpChar]++;
            }
            const strKey = AT.createAlphaNumKey(tmpMap);

            if (isDuplicateKey(listMap, strKey)) 
                listMap[strKey].push(currStr);
            else listMap[strKey] = [currStr];

            nLoop++;
        }
        return Object.values(listMap);
    };

    const isDuplicateKey = (object, key) => Object.keys(object).indexOf(key) > -1;
    class AlphaTable {
        constructor() {
            // this.nStartUpperCase = 65;
            this.nStartLowerCase = 97;
            this.alphaRange = 25;
        }
        createAlphaMap() {
            const result = {};
            const max = this.nStartLowerCase + this.alphaRange;
            for (let i = this.nStartLowerCase; i <= max; i++) {
                const alpha = String.fromCharCode(i);
                result[alpha] = 0;
            }

            return result;
        }

        createAlphaNumKey = (object) => {
            return Object.keys(object).reduce((strResult, key) => {
                if (!object[key]) return strResult;
                strResult += (key + object[key]);
                return strResult;
            }, '');
        };
    }
    ```
    - 공간만 조금 나아지고, 시간 노답..
        - 시간: 6636 ms (5.02%)	
        - 공간: 50.3 MB (36.75%)

---

### **참고 링크**

**강의**

-   [코딩테스트, 중급, Group Anagrams](https://youtu.be/5BRmT4VTEpo)
