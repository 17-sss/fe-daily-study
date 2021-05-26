### Search a 2D Matrix
Problem: https://leetcode.com/problems/search-a-2d-matrix/

#### 초급
<정렬된 2D Matrix>
- 1차원 배열에서 요소를 찾는 방법을 생각하기 = Binary Search
- 예를 들어 찾고자 하는 숫자가 첫번째 열[0]과 첫번째 열[1] 사이의 숫자라면 그 숫자는 분명 '첫번째 열'에 위치한다. = log N
- 그리고 자연히 그 숫자는 '첫번째 행'에 위치한다는 사실을 유추할 수 있다. = log M
- log N + log M = log(MN)

<2D 배열을 1차원 배열로 보기>
- 한 줄의 1차원 배열로 정정한다. [1, 2, 3, 5, 9, 10, 14, 15, 16, 20, 25, 26, 29, 30, 35, 60] 에서 60는 (3, 3)!

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const temp = [];
    matrix.forEach(row => {
        temp.push(...row);
    })
    return temp.includes(target);
};
```

#### 중급
<정렬이 되어 있지 않은 2D Matrix>
- 하나의 행, 하나의 열은 정렬이 되어 있지만 한 열의 마지막 숫자는 다른 열의 마지막 숫자보다 클 수도 있다.

첫번째 방법.
- 하나의 열에 대해서는 binary search를 적용할 수 있다.
- 순차적으로 binary search를 적용하는 것.
- N log (M)

두번째 방법.
- 끝점과 시작점 비교하기
- 각 행과 열의 가장 끝에 위치하는 숫자가 찾는 숫자보다 작을 경우, 그 전에 위치한 숫자들은 고려할 필요가 없다.
- 같은 방법으로 확인한 숫자가 찾는 숫자보다 클 경우, 확인한 숫자 뒤에 따라오는 숫자도 고려할 필요가 없다.
- O(m + n)

가장 큰 rowIdx 부터 시작. colIdx는 0부터 시작.
rowI[0]부터 시작.
rowI[0] < target 일 때, colI++  [2, 4, 5, 8]
rowI[0] > target 일 때, rowI--  [4, 6, 7, 10]
rowIdx-- (rowIdx > -1)
colIdx++ (matrix[0].length - 1 > colIdx)

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    let rowI = matrix.length - 1;
    let colI = 0;

    while(rowI > -1 && matrix[0].length - 1 >= colI) {
        if (matrix[rowI][colI] > target) rowI--;
        else if (matrix[rowI][colI] < target) colI++;
        else return true;
    }
    return false;
};
```