코딩테스트, 초급, Min/Max Stack
155. Min Stack
https://leetcode.com/problems/min-stack/

- stack과 max라는 스택 2가지를 만든다.
- stack에는 모든 엘리먼트가 push된다.

오늘 배운 점:
- min과 stack의 길이를 동일하게 하면 getMin에서 바로 상위의 숫자를 return 하면 된다.
- min에 비교대상이 없을 때, 즉, min스택에 아무것도 없을 때는 예외처리가 필요!!

방법1.
```js
/**
 * initialize your data structure here.
 */
const MinStack = function() {
    this.stack = [];
    this.min = [];

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(!this.min.length) { //min이 비어있을 때 ⭐️
        this.min.push(val);
    } else {
     val < this.min[this.min.length -1] ? this.min.push(val) : this.min.push(this.min[this.min.length -1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const num = this.stack.pop();
    this.min.pop();
    return num;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

    return this.min[this.min.length - 1];
};


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

방법2.
stack이랑 min이 길이가 다른 경우!
```js
/**
 * initialize your data structure here.
 */
const MinStack = function() {
    this.stack = [];
    this.min = [];

};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(!this.min.length) { //min이 비어있을 때
        this.min.push(val);
    } else {
        if (val <= this.min[this.min.length -1]) this.min.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const num = this.stack.pop();
    if (num === this.min[this.min.length - 1]) this.min.pop();
    return num;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

    return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```