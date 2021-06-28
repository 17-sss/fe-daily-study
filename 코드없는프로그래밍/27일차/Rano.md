## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 28일]

### **1.** Leetcode - Minimum Path Sum

[문제: LeetCode - 64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

**문제 요약**

-   2차원 배열 (grid) 에서 마지막 배열의 마지막 값까지 가는데 필요한 최소비용을 계산하는 문제 (DP 문제)
-   각 값까지 가는데 드는 비용 공식  
     `F(x, y) = cost(x, y) + Math.min(F(x-1, y), F(x, y-1))`
-   예시용 이미지 (Grid 이미지)  
     <img src="https://user-images.githubusercontent.com/33610315/123613964-da7b0780-d83e-11eb-9283-0cede24962eb.png" width=200 />

**코드 및 풀이**

-   코드 : 통과 성공

    ```js
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    const minPathSum = (grid) => {
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                const value1 = y ? grid[y - 1][x] : -1; // F(x, y-1)을 뜻함
                const value2 = x ? grid[y][x - 1] : -1; // F(x-1, y)을 뜻함
                let min = 0;

                if (value1 <= -1 && value2 >= 0) min = value2;
                else if (value1 >= 0 && value2 <= -1) min = value1;
                else if (value1 <= -1 && value2 <= -1) min = 0;
                else min = Math.min(value1, value2);

                grid[y][x] = grid[y][x] + min;
            }
        }

        const lastRowIdx = grid.length - 1;
        const lastColIdx = grid[grid.length - 1].length - 1;

        const result = grid[lastRowIdx][lastColIdx];
        return result;
    };

    minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
    ]); // 7
    ```

    -   Runtime: 72 ms, faster than 97.49%
    -   Memory Usage: 40.5 MB, less than 60.03%

-   풀이

    -   먼저, 전부 순회해주기 위해 이중 for문 선언.

        ```js
        const minPathSum = (grid) => {
            for (let y = 0; y < grid.length; y++) {
                for (let x = 0; x < grid[y].length; x++) {
        ```

    -   위 쓰여진 공식 `F(x, y) = cost(x, y) + Math.min(F(x-1, y), F(x, y-1))`를 참고하여  
        value2 ==> `F(x-1, y)`, value1 ==> `F(x, y-1)` 선언  
        이 두 값은, 현재 위치 `grid[y, x]` 를 기점으로 바로 위에 있는 값 (`value1`) 오른쪽에 있는 값 (`value2`)을 계산해준 것!

        ```js
                    const value1 = y ? grid[y - 1][x] : -1; // F(x, y-1)을 뜻함
                    const value2 = x ? grid[y][x - 1] : -1; // F(x-1, y)을 뜻함
        ```

    -   위에서 계산해준 `value1` & `value2`가 _`undefined`_ 일 경우가 있음  
        이 경우를 해결하기 위해 `min`이라는 변수를 선언하여  
        현재 위치 (`grid[y][x]`) 까지 가는 비용을 계산해준 후 현재 위치의 비용 값과 더한 뒤 대입.  
        (두 값이 모두 `-1`(_`undefined`_)가 아닐 경우 Math.min으로 계산)

        ```js
                    let min = 0;

                    if (value1 <= -1 && value2 >= 0) min = value2;
                    else if (value1 >= 0 && value2 <= -1) min = value1;
                    else if (value1 <= -1 && value2 <= -1) min = 0;
                    else min = Math.min(value1, value2);

                    grid[y][x] = grid[y][x] + min;
                }
            }
        ```

    -   위 반복문을 끝낸 후, Grid의 마지막 위치의 계산된 비용 값을 반환!

        ```js
            const lastRowIdx = grid.length - 1;
            const lastColIdx = grid[grid.length - 1].length - 1;

            const result = grid[lastRowIdx][lastColIdx];
            return result;
        };
        ```

<br/><br/>

### **2.** Leetcode - Coin Change

[문제: LeetCode - 322. Coin Change](https://leetcode.com/problems/coin-change/)

**문제 요약**

-   주어진 동전의 종류 (coins)로 두번째 매개변수 amount가 되려면  
    필요한 최소한의 동전 갯수를 구하는 문제, 없다면 -1
-   Bottom-Up 방식으로 풀기 (0 ~ amount까지 값을 계산하면서 결과 값에 쓰일 배열에 push)

**이미지**

-   Top-Down 방식 & Bottom-Up 방식의 공식  
     <img src="https://user-images.githubusercontent.com/33610315/123626402-c8539600-d84b-11eb-85d0-5ff16ede8bf9.png" width=400/>
-   Bottom-Up 방식의 공식 및 참고 이미지  
     <img src="https://user-images.githubusercontent.com/33610315/123626523-e7eabe80-d84b-11eb-9f6e-e4e42544ecfb.png" width=400/>

**코드**

-   코드 : 통과 성공 (이해를 온전히 하지 못하여, 설명이 난해할 수 있습니다...ㅠ)

    ```js
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    const coinChange = (coins, amount) => {
        // 결과 값에 쓰일 배열 (아래 while 문에서 순회하는 모든 nCurrCost에 필요한 동전의 갯수를 계산하고 넣을 배열)
        const arrCalc = [];

        // 만약 amount가 10이라면 0~10까지 순회
        let nCurrCost = 0;
        while (nCurrCost <= amount) {
            // nCurrCost가 0일 때는 필요한 동전이 없음!
            if (nCurrCost === 0) {
                arrCalc.push(0);
                nCurrCost++;
                continue;
            }

            const arrCostMinus = coins.map((coin) => {
                // 현재 주어진 동전들 (coins)에서
                // "기준(순회)가격(nCurrCost) - 각 동전의 값"
                /*
                    - 만약 음수라면 그 동전으로 nCurrCost를 만들 순 없다는 것
                    - 음수가 아닌 0 이상의 값이라면 arrCalc에서 curr 위치에 있는 값을 대입
                    -- 위 이미지를 참고하여 만듬. 아직 완벽한 이해는 부족..
                */
                const curr = nCurrCost - coin;
                return curr > -1 ? arrCalc[curr] : -1;
            });

            /* 
                - 위에서 계산된 arrCostMinus의 값들이 전부 nCurrCost를 못만다면 (전부 -1 이라면) minCost는 -1
                - 그게 아니라면 -1 이 아닌 값들만을 필터링해서 제일 작은 값을 반환 후 + 1 한 값을 minCost에 대입
            */
            const isEmpty = arrCostMinus.every((v) => v === -1);
            const minCost = isEmpty
                ? -1
                : Math.min(...arrCostMinus.filter((v) => v !== -1)) + 1;
            arrCalc.push(minCost);
            // --------

            nCurrCost++;
        }
        return arrCalc[arrCalc.length - 1];
    };

    coinChange([2, 3, 5], 10); // 2
    ```

### **참고 링크**

**강의**

-   [코딩테스트, 초급, Min Sum Path](https://youtu.be/11oqpRgDF9Q)
-   [코딩테스트, 초급, 동전바꾸기](https://youtu.be/N7m44HWa39o)