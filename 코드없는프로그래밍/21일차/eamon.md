```js
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    
    this.map = new Set();
    
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const res = this.map.has(val)
    this.map.add(val) 
    return !res
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
   const res = this.map.has(val)
    this.map.delete(val) 
    return res
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const arr = Array.from(this.map)
    return arr[Math.floor(arr.length*Math.random())]
};

```