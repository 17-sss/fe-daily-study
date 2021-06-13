### 415. Add Strings
https://leetcode.com/problems/add-strings/

방법 1. - 실패
parseInt()로 문자를 숫자 변환한 후, 연산하고 JSON.stringify()로 다시 문자열화한다.
하지만 이 경우, 숫자의 자릿수가 32/64-bit 를 넘어가게 되면 적용이 되지 않는다.
```js
const addStrings = function(num1, num2) {
   return JSON.stringify(parseInt(num1) + parseInt(num2));
};
```
방법 2. - 통과
BigInt()는 number 값의 최대치인 2^53 - 1보다 더 큰 정수를 안정적으로 나타낼 수 있게 해주는 내장객체다.
BigInt()를 사용하면 방법1에서 발생되었던 runtime error를 방지할 수 있다.
```js
const addStrings = function(num1, num2) {
   return (BigInt(num1) + BigInt(num2)).toString();
};
```

방법 3.
pivot 두 개를 각각의 string에 만든다.
각 자릿수를 한자리씩 맞춰서 뒤에서부터 덧셈을 해준다.
덧셈 시 나머지를 가진 carry와 올림을 가진 up 변수를 만들어서 덧셈을 진행한다.
이 때, 시간복잡도를 O(N)으로 진행하기 위해서는 배열의 뒤에 요소를 추가해야하므로, 차례대로 뒤에 숫자를 push하고 reverse하는 방식을 사용한다.
```js
const addStrings = (num1, num2) => {
    const arr = [];
    const max = num1.length > num2.length ? num1.length - 1 : num2.length - 1;
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let up = 0;
    let carry = 0;

    for (let i = max; i >= 0; i--) {
        let sum = num1[p1] + num2[p2] + up;
        up = Math.floor(sum / 10);
        carry = sum % 10;
        arr.push(carry);
        p1--;
        p2--;
        if(p1 < 0 || p2 < 0) {
            //남아있는 자릿수는 전부 arr에  push 되어야 함.
            return;
        }
    }

    return arr.reverse().join("");
};
```