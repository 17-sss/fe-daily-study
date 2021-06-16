## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 16일]

### **1.** Leetcode - Top K Frequent Words

[문제: LeetCode - 692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)

**> 문제 요약**

-   Map 활용 & 매개변수 `words`(배열)를 순회하여 각 단어의 갯수를 카운팅하여 Map에 넣어준 뒤에  
     단어가 많이 있는 순서대로 _정렬_ 한 후 매개변수 `k` 만큼 단어들을 반환하는 문제
-   이 문제에서 Map에는 **key**는 단어가 들어가고 **value**는 매개변수 `words`안에서의 현재 단어(key)의 갯수

**> 정렬 방법**

-   map의 `map.entries()`를 활용하여 map을 배열로 변환

    -   이중 배열로 나옴  
        `[ [key, value], [key, value], ... ]`
    -   배열로 변환 후 value를 기준으로 내림차순 정렬 후  
        매개변수 `k` 만큼 단어(key)들만을 반환

-   map에서 `map.keys()`를 활용하여 key 값들만 배열로 변환
    -   각 key의 value들을 기준으로 내림차순 정렬 후  
        매개변수 `k` 만큼 단어(key)들만을 반환

**>강의에서의 시간 / 공간 복잡도**

-   시간복잡도: _O(n)_ + _O(n log n)_ : **_O(n log n)_**
-   공간복잡도: **_O(n)_**

**코드**

-   코드 : 통과 성공 (정렬 방법: `map.entries()`)

    ```js
    /**
     * @param {string[]} words
     * @param {number} k
     * @return {string[]}
     */
    const topKFrequent = (words, k) => {
        words.sort(); // 먼저 배열 words를 정렬
        const map = new Map();
        const nMax = words.length;

        // words 배열을 순회하며 map에 값을 추가하며 카운팅
        let nIdx = 0;
        while (nIdx < nMax) {
            const word = words[nIdx];
            if (map.has(word)) map.set(word, map.get(word) + 1);
            else map.set(word, 1);
            nIdx++;
        }

        const arrMap = [...map.entries()] // 위에서 만든 Map을 Array로 변환
            .sort((a, b) => b[1] - a[1]) // value값을 기준으로 내림차순 정렬
            .map(([key, _]) => key); // key(word)만으로 이루어진 배열 생성

        // 매개변수 k만큼 반환
        return arrMap.slice(0, k);
    };
    topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3); // ["i","love","coding"]
    ```

    -   시간복잡도: 84 ms / faster than 96.69%
    -   공간복잡도: 42.3 MB / less than 55.05%

### **2.** Leetcode - Top K Frequent Elements (추가 문제)

[문제: LeetCode - 347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

-   위 문제와 비슷하나 문자열들 대신 숫자가 들어오고, 디테일한 정렬은 안해도 됨.
-   시나리오
    -   nums 배열에 있는 숫자들을 카운팅 (map 활용)
    -   계산된 map에서 많이 쓰이는 순으로  
         매개변수 k에 해당하는 갯수만큼 num들로 이루어진 배열을 반환

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    const topKFrequent = (nums, k) => {
        const map = new Map();
        const nMax = nums.length;

        let nIdx = 0;
        while (nIdx < nMax) {
            map.has(nums[nIdx])
                ? map.set(nums[nIdx], map.get(nums[nIdx]) + 1)
                : map.set(nums[nIdx], 1);
            nIdx++;
        }

        return [...map.entries()]
            .sort((a, b) => b[1] - a[1])
            .map((item) => item[0])
            .slice(0, k);
    };
    ```

    -   시간복잡도: 84 ms / faster than 96.57%
    -   공간복잡도: 41.7 MB / less than 73.50%

### **참고 링크**

**강의**

-   [코딩 테스트, 중급, Top K frequent element](https://youtu.be/6CD5EzjCZPA)
