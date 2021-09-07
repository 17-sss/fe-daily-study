https://leetcode.com/problems/basic-calculator-ii/submissions/

```js
/**
 * @param {string} s
 * @return {number}
 */
//time - o(n) space - o(n)
// 정규표현식
var calculate = function (s) {
  s = s.replace(/\s/gi, "");
  // const calNum = s.split(/[\+\-\/\*]/gi)
  // const calArr = s.replace(/[\d]/gi,"").split("")

  //     console.log(calArr,calNum)
  let stack = [+s[0]];
  let calStack = [];
  let numStack = "";
  for (let i = 1; i < s.length; i++) {
    if ((s[i] === "/") | (s[i] === "*") | (s[i] === "+") | (s[i] === "-")) {
      if (calStack.length) {
        const cal = calStack.pop();
        const offset = stack[stack.length - 1] < 0 ? -1 : 1;
        if (cal === "/") {
          stack[stack.length - 1] =
            offset *
            Math.floor((offset * +stack[stack.length - 1]) / +numStack);
          numStack = "";
        } else {
          stack[stack.length - 1] = +stack[stack.length - 1] * +numStack;
          numStack = "";
        }
      }
    }
    if ((s[i] === "/") | (s[i] === "*")) {
      calStack.push(s[i]);
    } else if ((s[i] === "+") | (s[i] === "-")) {
      stack.push(s[i]);
    } else {
      if (calStack.length) {
        numStack += s[i];
      } else stack[stack.length - 1] += s[i];
    }
  }

  if (calStack.length) {
    const cal = calStack.pop();
    const offset = stack[stack.length - 1] < 0 ? -1 : 1;
    if (cal === "/") {
      stack[stack.length - 1] =
        offset * Math.floor((offset * +stack[stack.length - 1]) / +numStack);
      numStack = "";
    } else {
      stack[stack.length - 1] = +stack[stack.length - 1] * +numStack;
      numStack = "";
    }
  }
  return stack.reduce((acc, cur) => (acc += +cur), 0);
};
```
