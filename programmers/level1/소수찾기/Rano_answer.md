## 어려웠던 점 & 회고
- 예전에 풀어봤던 문제지만... 그 땐 검색해서 답안지보고 이해를 제대로 하지 않고 넘어갔던 것 같습니다..
    - 오늘 같이 코드리뷰하면서 많이 이해가 된 것 같습니다!
    - 다시 풀어봐야겠지만.. 점점 쌓이기만 하네요 :(
- 2차시도의 경우 지금 봤을땐 `indexOf`가 문제인 것 같기도 합니다.
    - 다른 방법으로 다시 약간 풀어서 해결해야할 것 같습니다!

## 코드 (2차시, 통과 실패)
```js
// https://programmers.co.kr/learn/courses/30/lessons/12921
// 소수 찾기

// 2차시, 통과 실패 (효율성 통과 실패, 56.3)
const solution = (n) => {
    // n만큼 숫자가 들어간 배열을 만들어줌.
    const arrNum = [];

    // 2에서 n까지의 수를 만들어서 배열에 넣어줌
    for (let i = 2; i <= n; i++) arrNum.push(i);

    // 소수 찾기 시작
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] === 0) continue;
        const numTmp = arrNum[i];   // 현재 arr의 i 위치에 있는 값 가져옴

        /*
            기준이 되는 arrNum[i]는 일단 0으로 만들지 않지만
            arrNum[i]의 배수들(j)은 전부 0처리.
                1) i가 2일 경우
                    n       arrNum[i]   j
                    100     2           4
                                        6
                                        8
                                        10
                                        ...
                2) i가 3일 경우
                    n       arrNum[i]   j
                    100     3           6
                                        9
                                        12
                                        15
                                        ...
                3) i가 17일 경우
                    n       arrNum[i]   j
                    100     17          34
                                        51
                                        68
                                        85
                                        ...

            현재 j의 값을 arrNum 안에서 찾음 (indexOf)
            찾은 값을 0으로 변경
        */
        for (let j = numTmp * 2; j <= n; j += numTmp) {
            if (arrNum.indexOf(j) < 0) continue;
            arrNum[arrNum.indexOf(j)] = 0;
        }
    }

    // 0이 아닌 값들을 모아 length 반환
    return arrNum.filter((v) => v).length;
};
```

## 코드 (1차시, 통과 실패)
```js
const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const solution = (n) => {
    let nCnt = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) nCnt++;
    }

    return nCnt;
};
```