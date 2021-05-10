## 어려웠던 점 & 회고
- 저는 다른 분들과 다르게 배열로 풀이를 했습니다.  
    첫번째 풀이는 `createSum` 함수에서 split, map, reduce까지 활용해서 그런지 많이 느렸습니다.  
    두번째 풀이에선 split, reduce만 활용했는데 근소한 차이이지만 시간이 많이 줄은 걸 볼 수 있었습니다.
- 비교적 빨리 풀었던 문제 같습니다.
- 아쉬운 점이라면 아직도 Map, Set을 제대로 쓸 줄 모른다는 점?  
    ~~언제쯤 쓰려나 싶습니다..~~


## 문제 풀이 메모
- 숫자를 받아와서 한 글자씩 쪼개어 전부 제곱을 계산해주고  
    그 계산된 결과값들을 전부 더함.  
    더해서 1이 나온다면 Happy Number (`true` 반환) (나올때까지 반복)  
    제곱해서 더한 값들이 계속 같은 규칙을 가지면서 while Loop를 돌고 있다면  
    HappyNumber가 될 수 없기에 `false` 반환


## 코드 (2차시, 통과 성공 (84ms, faster than 86.28%) )

```js
// https://leetcode.com/problems/happy-number/
// Happy Number

/**
 * @param {number} num
 */
const createSum = (num) =>
    ('' + num).split('').reduce((prev, curr) => prev + curr ** 2, 0);

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    const arrTemp = [];
    let nTemp = n;

    while (true) {
        nTemp = createSum(nTemp);
        if (nTemp === 1) return true;
        if (arrTemp.indexOf(nTemp) > -1) break;
        arrTemp.push(nTemp);
    }
    return false;
};
```

## 코드 (1차시, 통과 성공 (92ms, faster than 52.19%) )

```js
/**
 * @param {number} num
 */
const createSum = (num) =>
    ('' + num)
        .split('')
        .map((v) => v ** 2)
        .reduce((prev, curr) => prev + curr);

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    const arrTemp = [];
    let nTemp = n;

    while (true) {
        nTemp = createSum(nTemp);
        if (nTemp === 1) return true;
        if (arrTemp.indexOf(nTemp) > -1) break;
        arrTemp.push(nTemp);
    }
    return false;
};
```
