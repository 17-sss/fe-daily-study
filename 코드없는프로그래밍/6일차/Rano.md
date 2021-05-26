## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 05월 26일]

### **1.** Leetcode - Search a 2D Matrix

[문제: LeetCode - 74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix)

-   2차원 배열에서 (2D Matrix) 매개변수로 받는 target의 값이 있는지 확인하는 문제
-   Binary Search 사용하여 풀이하라했는데, `indexOf`가 더 빠르네요

**코드**

-   코드 (1) : 통과 성공

    ```js
    const searchMatrix = (matrix, target) =>
        matrix
            .reduce((arr, value) => (arr.push(...value), arr), [])
            .indexOf(target) > -1;
    ```

    -   `indexOf` 활용하여 풀이

-   코드 (2) : 통과 성공

    ```js
    const searchMatrix = (matrix, target) => {
        const arrTmp = matrix.reduce(
            (arr, value) => (arr.push(...value), arr),
            [],
        );

        let left = 0;
        let right = arrTmp.length - 1;
        while (left <= right) {
            let pivot = Math.floor((left + right) / 2);

            if (arrTmp[pivot] === target) return true;
            else if (arrTmp[pivot] > target) right -= 1;
            else left += 1;
        }

        return false;
    };
    ```

    -   `Binary Search` 활용

### **2.** Leetcode - Search a 2D Matrix II

[문제: LeetCode - 240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)

- 강의 안보고 했을 땐 다 순회했다가 시간초과.. 강의 보고하니까 풀려지는 마술

**코드**

-   코드 (1) : 통과 실패 (시간 초과)

    ```js
    const searchMatrix = (matrix, target) => {
        const arrTmp = matrix.reduce((arrResult, items) => {
            for (let i = 0; i < items.length; i++)
                arrResult.indexOf(items[i]) < 0 && arrResult.push(items[i]);
            return arrResult;
        }, []);

        if (arrTmp.length === 1) return arrTmp[0] === target;
        arrTmp.sort((a, b) => a - b);

        return arrTmp.indexOf(target) > -1;
    };
    ```

    -   `sort` + `indexOf` 활용

-   코드 (2) : 통과 실패 (시간 초과)

    ```js
    const searchMatrix = (matrix, target) => {
        const arrTmp = matrix.reduce((arrResult, items) => {
            for (let i = 0; i < items.length; i++)
                arrResult.indexOf(items[i]) < 0 && arrResult.push(items[i]);
            return arrResult;
        }, []);

        if (arrTmp.length === 1) return arrTmp[0] === target;
        arrTmp.sort((a, b) => a - b);

        let left = 0,
            right = arrTmp.length - 1;
        while (left <= right) {
            let pivot = Math.floor((left + right) / 2);
            if (arrTmp[pivot] === target) return true;
            if (arrTmp[pivot] > target) right--;
            else left++;
        }

        return false;
    };
    ```

    -   `sort` + `Binary Search` 활용

-   코드 (3) : 통과 성공

    ```js
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    const searchMatrix = (matrix, target) => {
        let colIdx = 0;
        let rowIdx = matrix.length - 1;

        const colLength = matrix[0].length;

        while (colIdx < colLength && rowIdx > -1) {
            const currValue = matrix[rowIdx][colIdx];
            if (currValue > target) rowIdx--;
            else if (currValue < target) colIdx++;
            else return true;
        }

        return false;
    };
    ```

-   코드 (3)의 시나리오  
    **matrix**: `[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]`이며  
    **target**: `5`일 경우

    ```
    rowIdx = matrix.length-1; (4)

    rowIdx: 4    colIdx: 0
    matrix[rowIdx][colIdx] (t5 < 18) --> matrix[rowIdx] 제거
        rowIdx--

    rowIdx: 3    colIdx: 0
    matrix[rowIdx][colIdx] (t5 < 10) --> matrix[rowIdx] 제거
        rowIdx--

    rowIdx: 2    colIdx: 0
    matrix[rowIdx][colIdx] (t5 > 3) --> matrix[ALLROW][colIdx] 제거 (반복문)
        colIdx++

    rowIdx: 2    colIdx: 1
    matrix[rowIdx][colIdx] (t5 < 6) --> matrix[rowIdx] 제거
        rowIdx--

    rowIdx: 1    colIdx: 1
    matrix[rowIdx][colIdx] (t5 > 5) --> return true
    ```

---

### **+** 회고

-   졸립습니다. 그래도 다 풀어서 다행!!

### **참고 링크**

**강의**

-   [코딩 테스트, 중급, Search a 2D Matrix](https://youtu.be/4-y6eGUY-sI)
