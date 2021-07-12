## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 07월 12일]

### **1.** Leetcode - Coin Change 2

[문제: LeetCode - 518. Coin Change 2](https://leetcode.com/problems/coin-change-2/)

**문제 요약**

-   coins에 들어있는 종류의 갯수가 무제한 있을때, amount를 만들수있는 조합의 갯수를 구하라.
-   Knapsack 문제의 변형

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    const change = (amount, coins) => {
        const arrDP = Array.from({ length: coins.length + 1 }, () =>
            /* 각 행의 첫번째 값은 1개 (sum => 0을 만들 수 있는 경우는 주어진 코인 종류들만 있는 경우
                (즉 코인 종류는 있는데 코인 안줌!! 코인 없어!!))
                나머지는 0으로 초기화
                첫번째 행은 첫번째 값 제외하곤 0 (코인 종류도 주어지지 않았을 경우) */
            Array.from({ length: amount + 1 }, (_, i) => (i === 0 ? 1 : 0)),
        );

        for (let rowIdx = 1; rowIdx < arrDP.length; rowIdx++) {
            const prevRowIdx = rowIdx - 1;
            const prevRow = arrDP[prevRowIdx];
            const currCoin = coins[rowIdx - 1]; // tmpColValue를 계산하기 위해서는 colIdx - rowIdx가 아닌 현재 코인만큼 빼줘야함!

            for (let colIdx = 1; colIdx < amount + 1; colIdx++) {
                const tmpColValue = arrDP[rowIdx][colIdx - currCoin];
                const prevRowColValue = prevRow[colIdx];
                arrDP[rowIdx][colIdx] = // 바로 이전 행의 colIdx에 있는 값과 현재 행의 "colIdx - 코인 값"에 있는 값을 합쳐주어 대입
                    (typeof tmpColValue === 'undefined' || tmpColValue < 0
                        ? 0
                        : tmpColValue) + prevRowColValue;
            }
        }

        return arrDP[arrDP.length - 1][amount];
    };

    change(5, [1, 2, 5]); // 4
    ```

**참고 이미지**

<img width="400" src="https://user-images.githubusercontent.com/33610315/125220938-62aee180-e302-11eb-8bc7-ede3e08be1b2.png"/>

**끄적끄적**

-   조금은 알겠는데 모르겠다. 강의에 나온대로 만든..
-   그래도 예전엔 강의에 나온대로 해도 못풀었는데 그나마 나은듯..?
