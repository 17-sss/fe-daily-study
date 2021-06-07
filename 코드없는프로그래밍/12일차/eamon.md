
``` js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.Min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(!this.Min.length)
    this.Min.push(val)
    else if(this.Min[this.Min.length-1]>= val){
        this.Min.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
      console.log(this.stack, this.Min)
    if(this.Min.length && this.Min[this.Min.length-1]>= this.stack[this.stack.length-1]){
        this.Min.pop()
    }
    this.stack.pop()
     console.log(this.stack, this.Min)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

    return this.stack[this.stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.Min[this.Min.length-1]
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