dp 
- problem 을 subproblem 들로 만들고 중복되는 subproblem 계산을 저장해놓고 중복계산을 하지 않는 방법

BT 

```js
/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function(digits) {
var map = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
let arr = [];
    if(digits.length===0) return []
    const bt = (index=0,letter='') => {
    if(index > digits.length-1){

        arr.push(letter) 
        return
    } 
    
    let num = map[+digits[index] - 2]    

    for (const str of num) {
      bt(index+1, letter + str) 
    }
    
};
        bt()
        
    return arr
}
```