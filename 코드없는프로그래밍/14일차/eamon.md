
https://leetcode.com/problems/decode-string/submissions/

```js
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let strStack = [];
    let numStack =[];
    let num = "";
    let j=0;
    let res = [];
    
    s.split("").forEach((v,i)=>{
      if(v.replace(/[a-z]/gi,"") !== v){
          if(i===0) strStack.push("")
          strStack[strStack.length-1] = strStack[strStack.length-1] + v
          
      }else if(v==="["){
          strStack.push("")
          
          numStack.push(num)
   
          num = 0
          j= 0
      }else if(v==="]"){
          const str = strStack.pop()
          const num = numStack.pop()

          if(!strStack.length) strStack.push("")
          for (let k=0; k<+num; k++){
              strStack[strStack.length-1] = strStack[strStack.length-1] + str
          }
           
      }else{
          num += v
          j++
          
      }
        
        
    })
    return strStack[0]
};
```