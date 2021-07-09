## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 07월 09일]

### **1.** Leetcode - Partition Equal Subset Sum

[문제: LeetCode - 416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

**문제 요약**

-   양의 정수만으로 이루어진 숫자들을 합이 같은 두 subset으로 분류가 가능한지 판별
-   어제 문제와 상당히 비슷. (Knapsack 문제의 변형)

**메모**

-   colIdx 값의 경우 주어진 element들을 활용하여 해당 colIdx(sum)을 만들 수 있는지 판별하기.
-   rowIdx의 경우 주어진 element들을 뜻함
    -   예) rowIdx가 0일 경우 ==> 아무것도 주어지지 않음
    -   예) rowIdx가 3일 경우 ==> 2, 1, 2 가 주어졌음
-   두 subset으로 분류할 때 기준은, nums를 전부 합하고 나누기 2 해준 값이 되는지 체크하면 됨.

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    const canPartition = function (nums) {
        const halfSum =
            nums.reduce((result, curr) => ((result += curr), result), 0) / 2;
        if (halfSum % 1 !== 0) return false;

        const arrDP = Array.from({ length: nums.length + 1 }, () =>
            Array.from({ length: halfSum + 1 }, () => null),
        );

        // 현재 가지고 있는 element들로 0을 만들 수 있는 경우 처리 (어떠한 ele가 주어져도 주어진 ele들이 다 없을 수도 있으니까 0은 만들 수 있음)
        for (let rowIdx = 0; rowIdx < arrDP.length; rowIdx++)
            arrDP[rowIdx][0] = true;
        // 애초에 아무것도 주어지지 않았을 때 colIdx(sum) 중 0 이외엔 만들 수 있는 게 없음
        for (let colIdx = 1; colIdx < halfSum + 1; colIdx++)
            arrDP[0][colIdx] = false;

        // arrDP 순회
        for (let rowIdx = 1; rowIdx < arrDP.length; rowIdx++) {
            const currNum = nums[rowIdx - 1];

            for (let colIdx = 1; colIdx < halfSum + 1; colIdx++) {
                let isSum = false;
                const prevCol = colIdx - currNum;

                if (prevCol < 0) isSum = isSum || arrDP[rowIdx - 1][colIdx];
                else
                    isSum =
                        arrDP[rowIdx - 1][prevCol] || arrDP[rowIdx - 1][colIdx];

                arrDP[rowIdx][colIdx] = isSum;
            }
        }

        return arrDP[arrDP.length - 1][halfSum];
    };
    canPartition([2, 1, 2, 3, 4]); // true
    ```

**참고 이미지**

<img width="400" src="https://user-images.githubusercontent.com/33610315/125018182-8c23ff00-e0af-11eb-8ffc-424f449174ea.png"/>

**끄적끄적**

-   계속 이해는 못하고 있지만, 오늘꺼는 조금 나았던 듯..
-   조금만 더 해보기로!
