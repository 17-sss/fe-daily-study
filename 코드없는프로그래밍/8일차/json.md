## Add Strings

### 풀이 1. BigInt

주어지는 스트링이 자바스크립트의 int 유효범위를 넘기는 경우가 있어 BigInt를 사용했습니다.

```js
const addStrings = (num1, num2) => (BigInt(num1) + BigInt(num2)).toString();
```

### 풀이 2. 전가산기 구현

가산기를 통해 문자열을 하나씩 더 해가는 구조입니다.

**코드**

```js
var addStrings = function (num1, num2) {
  let [carry, sum, i, j] = [false, 0, num1.length - 1, num2.length - 1];
  const result = [];
  while (i > -1 || j > -1) {
    [sum, carry] = adder(i > -1 ? num1[i--] : 0, j > -1 ? num2[j--] : 0, carry);
    result.push(sum);
  }
  if (carry) result.push(1);
  return result.reverse().join('');
};

const adder = (a, b, carry, sum = Number(a) + Number(b) + carry) => [
  sum % 10,
  sum > 9,
];
```

**설명**

```
주어진 문자열이 '19', '2955' 일 때,
step 1. i = 1, j = 3, carry = false, result = [];
  adder(9, 5, false);
    return [4, true];
  result = [4];
  carry = true;
step 2. i = 0, j = 2, carry = true, result = [4];
  adder(1, 5, true);
    return [7, false];
  result = [4, 7];
  carry = false;
step 3. i = -1, j = 1, carry = false, result = [4, 7];
  adder(0, 9, false);
    return [9, false];
  result = [4, 7, 9];
  carry = false;
step 4. i = 0, j = 2, carry = false, result = [4, 7, 9];
  adder(0, 2, true);
    return [2, false];
  result = [4, 7, 9, 2];
  carry = false;

[4, 7, 9, 2].reverse() = [2, 9, 7, 4]
return '2974';
```
