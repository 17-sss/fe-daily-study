```js
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let i = 0;

  let stack = [];
  let ans = [];
  while (i < s.length) {
    if (s[i] === "(") {
      stack.push(i);
      ans.push(s[i]);
    } else if (s[i] === ")") {
      if (stack.length) {
        stack.pop();
        ans.push(s[i]);
      } else {
        ans.push("");
      }
    } else {
      ans.push(s[i]);
    }
    i++;
  }
  console.log(stack);

  if (stack.length) {
    stack.forEach((i) => {
      ans[i] = "";
    });
  }
  return ans.join("");
};
```
