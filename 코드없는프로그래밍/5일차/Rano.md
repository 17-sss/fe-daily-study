## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 05월 25일]

### **1.** Leetcode - 3Sum Closest

[문제: LeetCode - 16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/)

**코드**

-   코드 (1) : 통과 실패

    ```js
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    const threeSumClosest = (nums, target) => {
        nums.sort((a, b) => a - b);
        let result = nums[0] + nums[1] + nums[2];

        let pivot = 0;
        let left = pivot + 1;
        let right = nums.length - 1;

        while (pivot < nums.length) {
            if (right === left) {
                pivot++;
                left = pivot + 1;
                right = nums.length - 1;
            }

            const pivotNum = nums[pivot];
            const leftNum = nums[left];
            const rightNum = nums[right];
            const sum = pivotNum + leftNum + rightNum;

            if (sum === target) return sum;
            if (Math.abs(result - target) > Math.abs(sum - target))
                result = sum;

            if (sum > target) right--;
            else left++;
        }

        return result;
    };
    ```

-   코드 (2) : 통과 성공

    ```js
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    const threeSumClosest = (nums, target) => {
        nums.sort((a, b) => a - b);

        let result = nums[0] + nums[1] + nums[2];

        for (let pivot = 0; pivot < nums.length - 1; pivot++) {
            let left = pivot + 1;
            let right = nums.length - 1;

            while (left < right) {
                const pivotNum = nums[pivot];
                const leftNum = nums[left];
                const rightNum = nums[right];
                const sum = pivotNum + leftNum + rightNum;

                const absResult = Math.abs(result - target);
                const absSum = Math.abs(sum - target);

                if (absSum < absResult) result = sum;
                if (sum === target) return sum;

                if (sum > target) right--;
                else left++;
            }
        }

        return result;
    };
    ```

### **2.** Leetcode - 4Sum

[문제: LeetCode - 18. 4Sum](https://leetcode.com/problems/4sum/)

**코드**

-   코드 (1)

    ```js
    /**
    * @param {number[]} nums
    * @param {number} target
    * @return {number[][]}
    */
    const fourSum = (nums, target) => {
        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                let left = j + 1;
                let right = nums.length - 1;

                while (left < right) {
                    const sum = nums[i] + nums[j] + nums[left] + nums[right];
                    if (target === sum) {
                        const item = JSON.stringify([ nums[i], nums[j], nums[left], nums[right] ]);
                        if (result.indexOf(item) < 0) result.push(item);

                        left++;
                        right--;
                    } else if (target > sum) left++;
                    else right--;
                }
            }
        }
        return result.map((item) => JSON.parse(item));
    };
    ```
    - `JSON.stringify` & `JSON.parse` 활용하지 않고 배열 안의 배열아이템 중복 체크하는 법은 없을까..?

### **3.** Leetcode - Rotate Image (보류)

[문제: LeetCode - 48. Rotate Image](https://leetcode.com/problems/rotate-image/)

- 이 문제는 다음에 다시 풀어보도록 하겠습니다😭

**코드**

-   코드 (1) : 참고용 코드 (이해하는데 주력)

    ```js
    /**
    * @param {number[][]} matrix
    * @return {void} Do not return anything, modify matrix in-place instead.
    */
    const rotate = (matrix) => {
        let Q = [];
        matrix.forEach((arr) => Q.push(...arr));


        /*
            j   0   1   2
            i   2
                [j0][i2] -> 1
                [j1][i2] -> 2
                [j2][i2] -> 3

            j   0   1   2
            i   1
                [j0][i1] -> 4
                [j1][i1] -> 5
                [j2][i1] -> 6

            j   0   1   2
            i   0
                [j0][i0] -> 7
                [j1][i0] -> 8
                [j2][i0] -> 9
        */
        for (let i = matrix.length - 1; i >= 0; i--) {
            for (let j = 0; j < matrix.length; j++) {
                matrix[j][i] = Q.shift();
            }
        }
    };

    rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]); // [[7,4,1],[8,5,2],[9,6,3]]
    ```
    - 이 로직은 `matrix`의 안의 모든 값(배열)들을 전부 펼쳐주어  
        임의의 array (여기선 `Q`)에 push 해준 후  
        90도가 회전되었을 때의 위치 값(idx)을 기반으로 넣어주는 것 같음.  
        Rotate라고는 보기 힘든 듯.

### **+** 회고

-   어제 강의 [코딩테스트, 중급, 2sum 3sum 4sum](https://youtu.be/OYQOe76Zc5I)에서 나온  
    못 풀었던 문제를 푸는데 어렵네요.. 또 까먹었나봐요

### **참고 링크**

**강의**

-   [코딩테스트, 중급, 2sum 3sum 4sum](https://youtu.be/OYQOe76Zc5I)
-   [코딩 테스트, 초급, Rotate Image](https://youtu.be/m340QHYvFXI)

