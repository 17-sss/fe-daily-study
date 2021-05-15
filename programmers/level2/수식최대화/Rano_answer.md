## 어려웠던 점 & 요약
- 처음에 Factorial이 뭐지? 하고 찾아보다가 이상하게 접근했었습니다.  
    문제를 잘 읽어봐야겠습니다.
- 인자로 들어오는 문자열을 가지고 나올 수 있는  
    제일 큰 절대값을 구하는 문제였습니다.  
    먼저 쓸 수 있는 연산자들의 경우의 수를 직접 써준 뒤,  
    숫자와 연산자를 나누어 문제를 풀었던 것 같습니다!  
    - n번째 숫자 뒤엔 연산자가 있으니  
        `n번째 숫자 "연산자" n+1번째 숫자`  
        이런 식으로 접근했습니다!

## 코드
```js
// https://programmers.co.kr/learn/courses/30/lessons/67257
// [카카오 인턴] 수식 최대화

// const createFactorial = (n) => [...Array( (n > 0) ? n : 1)].reduce((init, _, idx) =>  (idx + 1) * init, 1);
const minus = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const plus = (num1, num2) => num1 + num2;

const solution = (expression) => {
    const answers = [];

    const allCases = [
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['-', '+', '*'],
        ['-', '+', '*'],
    ];

    const numbers = expression.split(/[^\d]/).map((v) => +v);
    const opers = expression.split(/\d+/g).filter((v) => v);

    while (allCases.length > 0) {
        const currCases = allCases.shift(); // 현재 case는 참고만하는 것. pop하거나 그럼안대!

        const tmpOpers = [...opers];
        const tmpNumbers = [...numbers];
        while (currCases.length !== 0) {
            const currCase = currCases.shift();

            while (tmpOpers.indexOf(currCase) > -1) {
                const idx = tmpOpers.indexOf(currCase);
                tmpOpers.splice(idx, 1);
                if (currCase === '+') {
                    tmpNumbers[idx] = plus(
                        tmpNumbers[idx],
                        tmpNumbers[idx + 1],
                    );
                    tmpNumbers.splice(idx + 1, 1);
                } else if (currCase === '-') {
                    tmpNumbers[idx] = minus(
                        tmpNumbers[idx],
                        tmpNumbers[idx + 1],
                    );
                    tmpNumbers.splice(idx + 1, 1);
                } else {
                    tmpNumbers[idx] = multiply(
                        tmpNumbers[idx],
                        tmpNumbers[idx + 1],
                    );
                    tmpNumbers.splice(idx + 1, 1);
                }
            }
        }
        answers.push(Math.abs(tmpNumbers[0]));
    }

    return Math.max.apply(null, answers);
};
```
