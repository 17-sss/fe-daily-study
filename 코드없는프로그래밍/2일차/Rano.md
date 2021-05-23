## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 05월 20일]

### **1.** Leetcode - Sort Colors

[문제: LeetCode - 75. Sort Colors](https://leetcode.com/problems/sort-colors/)

-   이 문제는 정렬, 하지만 시간복잡도 _O(n)_ 으로.
-   quick sort의 심화.
-   요소는 `0, 1, 2` 뿐

**1) 코드 (강의 보기 전)**

-   의도 파악 못함 (풀다 맘)

    ```js
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    const sortColors = (nums) => {
        let pivot = 0;
        let left = 0;
        let right = nums.length - 1;

        while (pivot <= right) {
            if (pivot === left) {
                pivot++;
                continue;
            }
            if (nums[pivot] < nums[left]) {
                // p 0, l 2
                let tmp = nums[pivot];
                nums[pivot] = nums[left];
                nums[left] = tmp;

                if (nums[left] > nums[right]) {
                    let tmp = nums[right];
                    nums[right] = nums[left];
                    nums[left] = tmp;
                    right--;
                }
                left++;
            }
            // 뭔가 이상한데.. 0, 1, 2 뿐인데..
            // 다시 풀기!
        }
    };
    ```

**2) 코드 (강의 본 후)**

-   오답 (1)

    ```js
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    const sortColors = (nums) => {
        let pivot = 0;
        let left = 0;
        let right = nums.length - 1;

        while (pivot <= right) {
            if (nums[pivot] === 2) {
                let tmp = nums[right];
                nums[right] = nums[pivot];
                nums[pivot] = tmp;
                right--;
            } else if (nums[pivot] === 0) {
                let tmp = nums[left];
                nums[left] = nums[pivot];
                nums[pivot] = tmp;
                left++;
            }

            pivot++;
        }
    };
    ```

-   코드 (1) : 풀다가 강의의 풀이를 참고한 코드

    -   뭐지.. 왜 풀리는 거지..?
    -   다시 이해 필요
        -   바로 위 오답과 다른 점은 SWAP 로직을 변경했을 뿐인데.. 음.. 바꾸는 건 똑같지 않나?

    ```js
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    const sortColors = (nums) => {
        let pivot = 0;
        let left = 0;
        let right = nums.length - 1;

        while (pivot <= right) {
            if (nums[pivot] === 0) {
                let tmp = nums[pivot];
                nums[pivot] = nums[left];
                nums[left] = tmp;
                left++;
                pivot++;
            } else if (nums[pivot] === 2) {
                let tmp = nums[pivot];
                nums[pivot] = nums[right];
                nums[right] = tmp;
                right--;
            } else {
                pivot++;
            }
        }
    };
    ```

### **2.** Leetcode - Merge Sorted Array

[문제: LeetCode - 88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

-   `nums1`과 `nums2`를 합치는데, `nums1`만을 수정해서 정렬해야함

**1) 코드 (강의 보기 전)**

-   왜 안돼? 했는데 `nums1`만 수정해야해..

    ```js
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    const merge = (nums1, m, nums2, n) => {
        const tmpNums1 = nums1.filter((v) => v);
        return [...tmpNums1, ...nums2].sort((a, b) => a - b);
    };
    ```

**2) 코드 (강의 본 후)**

-   코드 (1) : 풀이 조금 참고

    ```js
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    const merge = (nums1, m, nums2, n) => {
        let idx1 = m - 1;
        let idx2 = n - 1;
        let wIdx = nums1.length - 1;
        if (idx2 < 0) return;

        while (idx1 >= 0 && idx2 >= 0) {
            if (nums1[idx1] >= nums2[idx2]) {
                nums1[wIdx] = nums1[idx1];
                idx1--;
                wIdx--;
            } else {
                nums1[wIdx] = nums2[idx2];
                idx2--;
                wIdx--;
            }
        }

        while (idx2 > -1) {
            nums1[wIdx] = nums2[idx2];
            wIdx--;
            idx2--;
        }
    };
    ```

    -   시간복잡도 _O(n+m)_
    -   공간복잡도 _O(1)_

### **3.** Leetcode - Find Peak Element

[문제: LeetCode - 162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)

-   Peak Element??
    -   어떤 숫자가 그 이후 숫자보다 클 때 Element를 Peak라 정의하고 있음.
-   이런 문제 풀 때 element를 기준으로 그래프 그려서 해결해보기!
    -   예) `[1, 2, 3, 5, 4]`  
         <img src="https://user-images.githubusercontent.com/33610315/118984764-c844b880-b9b8-11eb-8044-63b2173a9351.png" width="200">

**1) 코드**

-   코드 (1)

    -   우와 맞췄다..!!!

    ```js
    /**
     * @param {number[]} nums
     * @return {number}
     */
    const findPeakElement = (nums) => {
        let pivot = 0;
        let max = nums.length - 1;

        while (pivot <= max) {
            const leftNum = nums[pivot - 1];
            const rightNum = nums[pivot + 1];
            const curr = nums[pivot];

            if (curr > leftNum && curr > rightNum) return pivot;
            else pivot++;
        }

        return nums.findIndex((v) => Math.max(...nums) === v);
    };
    ```

    -   시간복잡도가 몇일까..? 느려터졌네

-   코드 (2) : 풀이 참고

    ```js
    /**
     * @param {number[]} nums
     * @return {number}
     */
    const findPeakElement = (nums) => {
        let left = 0;
        let right = nums.length - 1;

        if (nums.length <= 1) return 0;

        while (left < right) {
            let pivot = Math.floor((left + right) / 2);
            let num = nums[pivot];
            let nextNum = nums[pivot + 1];

            if (num < nextNum) left = pivot + 1;
            else right = pivot;
        }

        return left; // right해도 상관없어
    };
    ```

    -   시간복잡도 _O(logN)_ (Binary Search 활용)

### **+** 회고

-   뭔가 시간에 쫒겨서 답안지보고 풀이하는 느낌.. 주말에 정리할 필요가 있어보이는 하루였슴다..

---

### **참고 링크**

**강의**

-   [코딩 테스트, 중급, Sort Colors](https://youtu.be/VJWUWolxHu0)
-   [코딩테스트, 초급, Merge sorted array](https://youtu.be/V2Pd8DAHXQw)
-   [코딩 테스트,초급, find peak element](https://youtu.be/zChSh4yOOCg)
