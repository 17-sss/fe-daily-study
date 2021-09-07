```js
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = "";
  for (i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack = stack.slice(0, stack.length - 1);
    } else {
      stack += s[i];
    }
  }

  return stack;
};
```

```js

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    let numStack = [];
    
    for (i = 0; i < s.length; i++) {
    if(stack[stack.length-1] ===  s[i]){
        if(numStack[numStack.length-1] + 1 === k){
            numStack.pop()
             for (j = 1; j < k; j++) {
                 stack.pop()
             }
        }else{
        stack.push(s[i])    
        numStack[numStack.length-1] = numStack[numStack.length-1] + 1
        }
      
    }else{
        stack.push(s[i])
        numStack.push(1)
    }
        
  }
    
return stack.join("")
};

```