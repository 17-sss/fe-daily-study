## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 18일]

### **1.** Leetcode - Subarray Sum Equals K

[문제: LeetCode - 560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

**> 문제 요약**

-   매개변수 배열 `nums`에서 매개변수 `k`가 되는 Subarray 수 구하는 문제
-   슬라이딩 윈도우 방법을 생각할 수 있으나, 기준이 되는 배열안에 음수가 들어 있다면 불가능.
-   이 강의에선 매개변수로 주어진 배열 `nums`의 값들을 가지고, 모든 **_cumulative sum_** (누적 합) 을 만들어서 해결

**코드**

-   코드 : 통과 성공

    ```js
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    const subarraySum = (nums, k) => {
        if (!nums || nums.length <= 0) return 0;

        const cumulativeArr = [];
        nums.reduce((sum, curr) => {
            const currSum = sum + curr;
            cumulativeArr.push(currSum);
            return currSum;
        }, 0);

        const cumIndexesMap = new Map();
        cumIndexesMap.set(0, [-1]);
        let nLoop = 0,
            result = 0;
        while (nLoop < cumulativeArr.length) {
            const currSum = cumulativeArr[nLoop];
            const target = currSum - k;

            if (cumIndexesMap.has(target))
                result += cumIndexesMap.get(target).length;

            if (cumIndexesMap.has(currSum)) {
                const arrIdxValue = cumIndexesMap.get(currSum);
                cumIndexesMap.set(currSum, [...arrIdxValue, nLoop]);
            } else cumIndexesMap.set(currSum, [nLoop]);
            nLoop++;
        }

        return result;
    };
    ```

### **비슷한 문제**

[문제: LeetCode - 974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)

### **참고 링크**

**강의**

-   [코딩테스트, 중급, Subarray Sum = K](https://youtu.be/mEeK-SB7hEk)
