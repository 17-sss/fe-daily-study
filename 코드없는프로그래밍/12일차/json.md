## Min Stack

**코드 1. getMin O(n)**

```js
var MinStack = function() {
  stack = [];
};

MinStack.prototype.push = function(val) {
  stack.push(val);
};

MinStack.prototype.pop = function() {
  return stack.pop();
};

MinStack.prototype.top = function() {
  return stack[stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return Math.min(...stack);
};
```

**코드 2. getMin O(1)**

영상의 풀이대로 minStack을 사용했습니다.

```js
var MinStack = function() {
  stack = [];
  minStack = [];
};

MinStack.prototype.push = function(val) {
  stack.push(val);
  const min = minStack[minStack.length - 1];
  if(minStack.length === 0 || min > val) minStack.push(val);
  else minStack.push(min);
};

MinStack.prototype.pop = function() {
  minStack.pop();
  return stack.pop();
};

MinStack.prototype.top = function() {
  return stack[stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return minStack[minStack.length - 1];
};
```

**풀이 3. minStack에 index 요소 추가**

getMin에서 -2가 들어가있음에도 0이 출력되는 문제?
push에서 val이 0에 해당하는 위치임에도 왜 그럴까요?...

> const min = minStack[minStack.length - 1][1]; 1이 아니라 0..

```js
var MinStack = function() {
  stack = [];
  minStack = [];
};

MinStack.prototype.push = function(val) {
  stack.push(val);
  if(minStack.length) {
    const min = minStack[minStack.length - 1][0];
    if(min >= val) minStack.push([val, stack.length]);
  } else {
    minStack.push([val, stack.length]);
  } 
};

MinStack.prototype.pop = function() {
  if(minStack.length && minStack[minStack.length - 1][1] === stack.length) minStack.pop();
  return stack.pop();
};

MinStack.prototype.top = function() {
  return stack[stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return minStack[minStack.length - 1][0];
};
```