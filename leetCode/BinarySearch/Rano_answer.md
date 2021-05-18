## 코드

-   한 줄 코드 (quick sort 사용안함)
    ```js
    const search = (nums, target) => nums.indexOf(target);
    ```
-   quick sort

    ```js
    const search = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let pivot = Math.floor((left + right) / 2);

            if (nums[pivot] === target) return pivot;
            else if (nums[pivot] > target) right -= 1;
            else left += 1;
        }

        return -1;
    };
    ```

### **참고 링크**

-   [문제: LeetCode - 704. Binary Search](https://leetcode.com/problems/binary-search/)
