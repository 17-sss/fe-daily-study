
# 22. Generate Parentheses

 문제 [링크] https://leetcode.com/problems/generate-parentheses/

 자료구조 : BackTracking  

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 모든 조합을 찾아라 => 백트레킹
    const op = '('
    const cl = ')'
    let res = []
    let string =''
    const bt = (open, close) => {
        console.log(open,close)
        if(open === 0 && close === 0) res.push(string)
        if(open < 0 || close < 0){
            return
        }  
        if(open === close){
            string = string + op
            bt(open -1 ,close)
            string = string.slice(0,-1)
        }
        if(open < close){
             string = string + op
            bt(open -1 ,close)
        string = string.slice(0,-1)
            string = string + cl
            bt(open  ,close-1)
            string = string.slice(0,-1)
        }
         if(open < 0){
            string = string + cl
            bt(open  ,close-1)
             string = string.slice(0,-1)
        }
        
    }
    bt(n,n)
    return res
    
};
```

