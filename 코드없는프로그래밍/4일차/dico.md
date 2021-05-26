## 코드 없는 프로그래밍 4일차 (21.05.25)
### 48. Rotate Image
https://leetcode.com/problems/rotate-image/

- matrix를 2개 만들 수 있을 때:
가로축 인덱스를 X로, 세로축 인덱스를 Y로 생각해서 구하기. = Rotation matrix
90도를 오른쪽으로 회전했을 때, 다음과 같다:
new XIndex = - Old YIndex + 2;
new YIndex = Old XIndex;
newImg[newYIndex][newXIndex] = oldImg[y][x];

- In-place로 원래 있는 matrix를 회전해야 할 때:
temp = Img[b]; //원래값 복사해두기!
img[b] = img[a];
img[a] = img[d];
img[d] = img[c];
img[c] = temp;

4 * 4 라면  2 * 2 (4개 요소)만 기준으로 회전시키면 되고,
5 * 5 라면 2 * 3 (6개 요소)만 기준으로 회전시키면 된다. (영상 속 그림 참고)

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    
};
```