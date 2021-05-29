## Search a 2D Matrix

### 풀이

정렬되어 있는 이차원 배열에서 target에 해당하는 값이 있는지 확인해야 합니다.  
정렬되어 있으므로 이진 탐색으로도 풀이가 가능!

각 행은 오름차순 정렬이 보장되므로, 영상에서 설명한 풀이대로 검사할 행을 먼저 찾았습니다.

**검사할 행 찾기**

```js
let i = 0;
for (; i < matrix.length; i++) {
  if (matrix[i][0] > target) break;
}
i--;
// 만약 행이 1개인 이차원 배열인 경우 i가 0보다 작아지므로 예외처리를 추가
if (i < 0) i = 0;
```

검사할 행을 찾은 뒤에는 열에서 타겟을 찾게 됩니다.

**열에서 타겟 찾기**

```js
for (let j = 0; j < matrix[i].length; j++) {
  // 찾았다면 true를 반환!
  if (matrix[i][j] === target) return true;
}
```

**코드**

```js
var searchMatrix = function (matrix, target) {
  let i = 0;
  for (; i < matrix.length; i++) {
    if (matrix[i][0] > target) break;
  }
  i--;
  if (i < 0) i = 0;
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === target) return true;
  }
  return false;
};
```

## Search a 2D Matrix II

### 풀이

영상에 소개된 것처럼 배열의 값과 target을 비교하며 탐색 범위를 축소시켜나가는 방법으로 풀이했습니다.

**설명**

```js
var searchMatrix = function (matrix, target) {
  let i = matrix.length - 1;
  let j = 0;
  // i와 j가 배열의 범위를 벗어나지 않는다면 계속 검사!
  while (i > -1 && j < matrix[0].length) {
    if (matrix[i][j] === target) return true;
    // 현재 대상이 타겟보다 작다면 같은 열의 값은 검사할 필요가 없으므로 j를 증가
    if (matrix[i][j] < target) j++;
    // 반대라면 같은 행을 검사할 필요가 없으므로 i를 감소
    else i--;
  }
  return false;
};
```

**코드**

```js
var searchMatrix = function (matrix, target) {
  let i = matrix.length - 1;
  let j = 0;
  while (i > -1 && j < matrix[0].length) {
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] < target) j++;
    else i--;
  }
  return false;
};
```
