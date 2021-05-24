## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 05월 24일]

### **1.** Leetcode - Find the Duplicate Number

[문제: LeetCode - 287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)

**1) 코드 (강의 보기 전)**

-   코드 (1) : 통과 실패

    ```js
    /**
     * @param {number[]} nums
     * @return {number}
     */
    const findDuplicate = (nums) => {
        for (let i = 0; i < nums.length; i++) {
            const value1 = nums[i];
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;
                const value2 = nums[j];
                if (value1 === value2) return value2;
            }
        }
    };
    ```

    -   _O(n²)_ 인가
    -   무수히 많은 값은 처리 불가.

**2) 코드 (강의 본 후)**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {number[]} nums
     * @return {number}
     */
    const findDuplicate = (nums) => {
        nums.sort((a, b) => a - b);
        let nLoopPoint = 0;
        let nTmpPoint;
        while (nLoopPoint < nums.length) {
            nTmpPoint = nLoopPoint + 1;
            if (nums[nLoopPoint] === nums[nTmpPoint]) return nums[nLoopPoint];
            nLoopPoint++;
        }
    };
    ```

    -   _O(n logN)_
    -   시간 복잡도 안좋음. 너무 느림

-   코드 (2) : 통과 성공

    ```js
    const findDuplicate = (nums) => {
        let nLoop = 0;
        while (nLoop < nums.length) {
            const curr = nums[nLoop] > 0 ? nums[nLoop] : nums[nLoop] * -1;
            if (nums[curr] !== 0)
                if (nums[curr] > 0) nums[curr] = -nums[curr];
                else return curr;

            nLoop++;
        }
    };
    ```

    -   시간복잡도 & 공간복잡도
        -   시간복잡도: _O(n)_
        -   공간복잡도: _O(1)_
    -   `nums` 배열 자체를 활용하여 풀이
    -   `nums` 배열 안의 숫자 값(`value`)을 활용
        -   `nums[value]`로 하여 해당 index로 가서 `nums[value]`이 값을 음수화.
        -   만약 음수화하다가 이미 그 값이 음수가 되어있다면 그 값은 중복된 값임.  
             그 값을 return하면 됨
    -   (진짜 시간복잡도 차이가.. 와우)

### **2.** Leetcode - 2sum / 3sum / 4sum

[문제: LeetCode - 1. Two Sum](https://leetcode.com/problems/two-sum/) / [문제: LeetCode - 15. 3Sum](https://leetcode.com/problems/3sum/) / [문제: LeetCode - 18. 4Sum](https://leetcode.com/problems/4sum/)

**1) Two Sum**

-   코드 (1) : 통과 성공

    ```js
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    const twoSum = (nums, target) => {
        // StartPoint: SP
        // EndPoint: EP
        let SP = 0;
        let EP = nums.length - 1;

        while (SP <= nums.length - 1) {
            if (nums[SP] + nums[EP] === target) return [SP, EP];
            if (EP === SP + 1) {
                SP++;
                EP = nums.length - 1;
            } else EP--;
        }
    };
    ```

-   코드 (2) : 통과 성공, 위보다 조금 더 빠름

    ```js
    const twoSum = (nums, target) => {
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    result.push(i, j);
                }
            }
        }
        return result;
    };
    ```

**2) 3 Sum**

-   코드 (1) : 통과 실패

    ```js
    const threeSum = (nums) => {
        if (nums.length === 0 || nums.every((v) => !v)) return [];
        nums.sort((a, b) => a - b);

        const result = [];

        let pivot = 0,
            pointer = pivot + 1;
        const maxIdx = nums.length - 1;

        while (pivot <= maxIdx) {
            if (pointer === maxIdx) break;
            const pivotNum = nums[pivot];
            const pointerNum = nums[pointer];
            const maxIdxNum = nums[maxIdx];

            const sum = pivotNum + pointerNum + maxIdxNum;
            if (sum === 0) result.push([pivotNum, pointerNum, maxIdxNum]);
            if (pointer === maxIdx - 1) {
                pivot++;
                pointer = pivot + 1;
            } else pointer++;
        }

        return result;
    };

    threeSum([-1, 0, 1, 2, -1, -4]);
    ```

-   코드 (2) : 통과 성공

    ```js
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    const threeSum = (nums) => {
        if (nums.every((v) => !v)) {
            if (nums.length >= 3) return [Array.from({ length: 3 }, (_) => 0)];
            else if (nums.length === 0) return [];
        }

        nums.sort((a, b) => a - b);

        const result = [];

        for (let nLoop = 0; nLoop < nums.length; nLoop++) {
            let left = nLoop + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[nLoop] + nums[left] + nums[right];
                if (sum === 0) {
                    /*
                    // 아 화난다.. 왜 확인 못해
                    const item = [ nums[nLoop], nums[left], nums[right] ];
                    if (!result.includes(item)) result.push(item);
                    */

                    const item = JSON.stringify([ nums[nLoop], nums[left], nums[right] ]);
                    if (result.indexOf(item) <= -1) result.push(item);

                    left++;
                    right--;
                } else if (sum < 0) left++;
                else if (sum > 0) right--;
            }
        }

        return result.map((v) => JSON.parse(v));
    };
    ```

    -   엄청나게 느린 속도.. 시간복잡도 폭탄

### **+** 회고

-   `3sum`이 시간을 삭제시켰습니다.. [4sum](https://leetcode.com/problems/4sum/) 은 나중에 도전해보도록 하겠습니다😭

### **참고 링크**

**강의**

-   [코딩테스트, 중급, Find a duplicate number](https://youtu.be/k6rsok-7zNA)
-   [코딩테스트, 중급, 2sum 3sum 4sum](https://youtu.be/OYQOe76Zc5I)
