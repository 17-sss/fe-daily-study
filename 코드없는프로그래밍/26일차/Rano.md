## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 25일]

### **1.** Leetcode - Climbing Stairs

[문제: LeetCode - 70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

-   n개의 계단이 있음, 계단은 한번에 1칸이나 2칸을 오를 수 있음

    -   아래 그림처럼 몇 가지의 방법으로 계단을 오를 수 있는지 구하는 문제  
         <img src="https://user-images.githubusercontent.com/33610315/123532460-2ac36e00-d748-11eb-9381-f1d17a7947cb.png" width=400/>

-   피보나치 수열을 구하는 공식과 같음 `Bottom-Up` 방식으로 풀기
    -   공식: `F(n) = F(n - 1) + F(n - 2)`

**코드 및 메모**

-   코드 (1) : 통과 성공 (참고함)

    ```js
    /**
     * @param {number} n
     * @return {number}
     */
    const climbStairs = (n) => {
        const dpArr = [0, 1, 2]; // 한번에 오를 수 있는 계단 수는 최대 2개.
        if (n < dpArr.length) return dpArr[n]; // 계단의 수가 3개 미만일 경우 early return

        let nStartIdx = dpArr.length; // 3

        // 아래 메모 참고 (계단 수 3개 부터는 피보나치 수열 구하는 공식 활용, Bottom-up 방식)
        while (nStartIdx <= n) {
            const prev_1 = dpArr[nStartIdx - 1];
            const prev_2 = dpArr[nStartIdx - 2];
            dpArr.push(prev_1 + prev_2);
            nStartIdx++;
        }
        return dpArr[n]; // dpArr에서 계단의 수(n)의 위치에 있는 값이 정답!
    };
    ```

-   코드 (1) : 메모

    ```
    1. 만약 계단(n)이 3개 미만일 경우
        - 0개: 0 return : dpArr[0]
        - 1개: 1 return : dpArr[1]
        - 2개: 2 return : dpArr[2]
            - (1, 1) | (2)
    2. 만약 계단(n)이 3개 이상일 경우
        - 3개: 3 return : dpArr[3]
            - (1, 1, 1) | (1, 2) | (2, 1)
        - 4개: 5 return : dpArr[4]
            - (1, 1, 1, 1) | (1, 1, 2) | (1, 2, 1) | (2, 1, 1) | (2, 2)
    ```

### **2.** Leetcode - Min Cost Climbing Stairs

[문제: LeetCode - 746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

-   계단은 한번에 1칸이나 2칸씩 오를 수 있음, 전체 계단을 오르는 최소 비용은 얼마?

**> _이해 불가.. 참고 100%.._**

-   참고 이미지  
    <img src="https://user-images.githubusercontent.com/33610315/123534500-885fb680-d758-11eb-8044-71df1a667ae1.png" width=400/>
    <img src="https://user-images.githubusercontent.com/33610315/123535635-fb206000-d75f-11eb-8517-1c4a12964646.png" width=500/>
-   개인적으로 강의를 보았을 때 이해가 어려움..


**코드 (이해불가, 이미지 열심히 보고.. 강의듣고 따라써도..)**

-   코드 : 통과 성공 (참고 100% 코드..)

    ```js
    /**
     * @param {number[]} cost
     * @return {number}
     */
    const minCostClimbingStairs = (cost) => {
        const stairsCnt = cost.length;
        const arrMin = Array.from({ length: stairsCnt + 1 }).fill(0);
        for (let i = 2; i < stairsCnt + 1; i++) {
            const one = arrMin[i - 1] + cost[i - 1];
            const two = arrMin[i - 2] + cost[i - 2];
            arrMin[i] = Math.min(one, two);
        }
        return arrMin[stairsCnt];
    };
    ```

### **참고 링크**

**강의**

-   [코딩테스트, 초급, 계단오르기](https://youtu.be/lhZTYwHgrDM)
