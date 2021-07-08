## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 07월 07일]

### **1.** Leetcode - Word Break

[문제: LeetCode - 139. Word Break](https://leetcode.com/problems/word-break/)

**문제 요약**

-   주어진 string s를 wordDict 만으로 만들 수 있는지 판별.

**코드 및 이해해보기**

-   코드 : 참고

    ```js
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    const wordBreak = (s, wordDict) => {
        const S_LENGTH = s.length;
        const wordSet = new Set(wordDict);
        const arrDP = Array(S_LENGTH + 1).fill(false);
        arrDP[0] = true;

        for (let i = 1; i < arrDP.length; i++) {
            for (const word of wordSet) {
                const WORD_LENGTH = word.length;
                const prevIdx = i - WORD_LENGTH;
                if (prevIdx < 0) continue;

                if (!arrDP[prevIdx]) continue;
                const checkWord = s.slice(prevIdx, i);

                if (checkWord === word) {
                    arrDP[i] = true;
                    break;
                }
            }
        }
        return arrDP[arrDP.length - 1];
    };

    wordBreak('nocope', ['e', 'no', 'cop']);
    ```

-   이해해보기

    -   코드보며 메모 (해도 모르겠다)

        ```js
        const wordBreak = (s, wordDict) => {
            // wordDict을 Set으로 변환,
            const S_LENGTH = s.length;
            const wordSet = new Set(wordDict);
            // 결과값에 쓰일 배열 arrDP 선언 s의 길이 + 1 만큼 false로 채워줌
            const arrDP = Array(S_LENGTH + 1).fill(false);

            // arrDP의 맨 첫 값은 "". 그러므로 true (빈문자열이 만들어질 수 있으니)
            arrDP[0] = true;

            // arrDP 길이만큼 순회 (1부터 시작해야함. 0번째는 빈문자열에 관한 flag)
            for (let i = 1; i < arrDP.length; i++) {
                // wordDict(Set) 순회
                for (const word of wordSet) {
                    const WORD_LENGTH = word.length;
                    // prevIdx: 현재 arrDP 순회 위치 - 현재 Word의 길이
                    const prevIdx = i - WORD_LENGTH;

                    // prevIdx가 0보다 작거나, arrDP[prevIdx] false일경우 continue;
                    if (prevIdx < 0 || !arrDP[prevIdx]) continue;

                    const checkWord = s.slice(prevIdx, i);
                    if (checkWord === word) {
                        arrDP[i] = true;
                        break;
                    }
                }
            }
            return arrDP[arrDP.length - 1];
        };

        wordBreak('nocope', ['e', 'no', 'cop']);
        ```

    -   참고 이미지  
         <img src="https://user-images.githubusercontent.com/33610315/124737407-e0fe3300-df52-11eb-8608-335b2519863a.png" width=400/>

**끄적끄적**

-   이틀 연속 이해 못하고 있습니다.
-   DP 자체가 어려운건지, 아직 할 때가 아닌 건지 깊게 고민하게 되네요..  
    그리고 엄청난 시간을 소비했는데도 모르는..
-   기초부터 다시해야할까싶습니다..
