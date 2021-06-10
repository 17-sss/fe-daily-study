
https://leetcode.com/problems/daily-temperatures/submissions/
```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let maxStack = []
    let idx = temperatures.length-1;
    let res = new Array(temperatures.length).fill(0)
   while(idx>=0){
      
         if(!maxStack.length)maxStack.push([temperatures[idx],idx])
       else {
       if(temperatures[idx] < maxStack[maxStack.length-1][0]){
            res[idx] =  maxStack[maxStack.length-1][1] - idx
           maxStack.push([temperatures[idx],idx])
           
        }
        else {
            maxStack.pop()
            idx++
        }
       }
    idx--
    }
    return res

};

```