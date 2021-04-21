## 어려웠던 점 & 회고
- 처음에 문제를 보았을 땐, 어렵겠구나 싶었지만 순차적으로 해결해보니  
    의외로 금방 풀었던 것 같습니다.

## 풀이
1. 먼저 매개변수 `arr1`과 `arr2`안에 있는 10진수 숫자들을 모두 2진수로 바꿔줍니다.
    - `dec2bin` 함수 생성하여 작업했으며 현재 숫자 `num`과 지도 한변의 크기 `n`을 매개변수로 받아줍니다.
        - while loop를 실행 할 때, 처음엔 `num % 2` 로 나머지 숫자를 구해준 뒤 (1 or 0 이 나옴)  
            `dec2bin`의 결과 값(배열)에 push 해줍니다.
        - 그 후 num의 값을 갱신해줍니다.
            - num을 2로 나누어주고, 내림(`Math.floor`)을 실행합니다.
        - num이 0이 될 때까지 while loop를 돈 후,  
            지도 한변의 크기 `n`과 result의 길이와 일치하지 않는다면 0을 push 해줍니다.
        - 마지막은 배열의 `reverse()` 함수를 실행해줌으로써, 2진수를 만들어줍니다.
2. 1에서 만든 `dec2bin` 함수를 활용하여 arr1과 arr2에 있는 모든 숫자들을 2진수로 변환시킵니다.  
    (`convertArr1` & `convertArr2`)
3. 마지막으로 `convertArr1`를 기준으로 반환할 값인 새 결과 배열을 만들어줍니다.
    - `convertArr1의 요소`와 `convertArr2의 요소 (idx 기준)`를  
        서로 더해주어 숫자 1 이상이라면 '#'을 넣어주고  
        그 반대라면 ' ' 공백을 넣어줍니다.

## 코드 (1차시, 통과 성공)
```js
// https://programmers.co.kr/learn/courses/30/lessons/17681
// 2018 카카오 코딩테스트 - 비밀지도

// 1차시, 통과 성공 (2021.04.21)
function dec2bin(num, n) {
    const result = [];
    while (num !== 0) {
        const remainder = num % 2;
        result.push(remainder);
        num = Math.floor(num / 2);
    }
    while (result.length !== n) result.push(0);

    return result.reverse();
}

function solution(n, arr1, arr2) {
    const convertArr1 = arr1.map((num) => dec2bin(num, n));
    const convertArr2 = arr2.map((num) => dec2bin(num, n));

    return convertArr1.map((arrValue, idx) => {
        const arr2Value = convertArr2[idx];
        return arrValue.map((v, i) => (arr2Value[i] + v >= 1 ? '#' : ' ')).join('');
    });
}
```