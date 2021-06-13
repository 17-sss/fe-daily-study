 String Calculator
 https://leetcode.com/problems/basic-calculator-ii/

- 정규표현식으로 띄어쓰기를 빼주기!!
- 각 숫자가 언제 끝이 나는지를 알기 위해서는 operator(+, -, *, /)를 기준으로 숫자를 나눠야 한다.
- 각 숫자를 쌓는 스택 num에는 양수 혹은 음수가 들어간다.
- * 와 / 는 먼저 계산이 되어야하기 때문에 operator가 * 이거나 /인 경우에는 별도의 변수(savedOperator)에 operator를 담는다.
- 이어서 오는 숫자와 num 스택의 가장 윗 숫자를 변수에 들어있는 operator로 연산하여 num에 쌓는다.
- 모든 숫자가 쌓이면 num의 숫자를 더한다.

```js
/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  s = s.replace(/\s/g, '').split(''); //띄어쓰기 없애기 + 배열로 변환
  const num = [];

  let tmpNum = ''
  let savedOperator = ''
  s.forEach((l, i) => {
    if(l === '+' || l === '-' || l === '*' || l === '/') {
      if (savedOperator !== '') { //이미 savedOperator에 * 혹은 /가 들어있다면,
        const num1 = num.pop();
        tmpNum = parseInt(eval(`${num1}${savedOperator}${tmpNum}`));
        savedOperator = '';
      }
      num.push(tmpNum);
      tmpNum = '';
      if(l === '*' || l === '/')  {
        savedOperator += l;
      } else {
        tmpNum += l; //+나 -가 들어왔을때
      }
    } else {

      tmpNum += l;
    }
  })
    //마지막에 오는 요소가 tmpNum에 남아있다면,
  if (savedOperator !== '') { //이미 savedOperator에 * 혹은 /가 들어있다면,
    const num1 = num.pop();
    tmpNum = parseInt(eval(`${num1}${savedOperator}${tmpNum}`));
  }
  num.push(tmpNum);

  return num.reduce((acc, n) => {
    return acc += n*1;
  }, 0);
};
```