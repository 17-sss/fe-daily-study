## 어려웠던 점
- 처음엔 전부 숫자 하나하나 다 합쳐서 모든 케이스를 계산 한 후 제일 큰 값을 구하려했으나,  
    너무 많은 조건이 존재하고 시간복잡도가 심해질 것 같아서 다른 방법을 생각했습니다.  
    다른 방법이라곤 sort가 생각났었지만, sort로는 도저히 해결할 수 없을 것 같아  
    생각하고 또 생각해낸 방법이 숫자 하나마다 5글자가 되도록 반복하여  
    예) `5` -> `55555` | `32` -> `32323`
    임시의 String형 숫자를 만든 후, 이 String형 숫자들을 기준으로 sort를 내림차순으로 정렬하였습니다.  
    정렬 후 저장해두었던 기존의 숫자를 reduce 함수를 활용하여 결과 값을 만들어내었으나...  
    테스트 케이스는 통과하지만, 제출했을 땐 실패 투성이네요.
- 0 처리를 하던지, sort에 대해서 debugging하며 이해를 해나아갈 생각입니다.
- 오늘 스터디 너무 좋았습니다!!
    - sort를 이해해보도록 하겠슴다!


## 코드 (통과 실패)
```js
// https://programmers.co.kr/learn/courses/30/lessons/42746
// 가장 큰 수
class Num {
    constructor(num, idx) {
        this.num = num;
        this.idx = idx;
        this.tempNum = null;
    }
}

function createTempNum(number) {
    let result = '';
    while (result.length < 5) result += number;
    if (result.length > 5) result = result.substring(0, 5);
    return result;
}

function solution(numbers) {
    const arrResult = numbers.map((v, i) => new Num(v, i));

    for (let i = 0; i < numbers.length; i++) {
        const curr = arrResult.find((v) => v.num === numbers[i]);
        curr.tempNum = createTempNum(numbers[i]);
    }
    arrResult.sort((a, b) => Number(b.tempNum) - Number(a.tempNum));

    const result = arrResult.reduce(
        (initValue, curr) => (initValue += curr.num),
        '',
    );

    return result;
}
```



