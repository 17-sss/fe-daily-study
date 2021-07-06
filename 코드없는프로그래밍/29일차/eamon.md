DP 8번 영상
https://leetcode.com/problems/longest-palindromic-substring/

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // two point
    
    let sub = []
    for(let i=0; i<s.length; i++){
        let arr = new Array(s.length).fill(0)
        arr[i] = 1
        if(s[i+1] === s[i]) arr[i+1] = 2
        sub.push(arr)
    }
    
    if(s.length<2) return s
   if(s.length === 2) return s[0] === s[1] ? s : s[0]
    let x = 2; 
    let y = 0;
    let str = 2;
   while(true){
       if(sub[y+1][x-1]&&s[y] === s[x]){
        sub[y][x] = sub[y+1][x-1] + 2    
       }else{
        sub[y][x] = 0
       }
       if(x===s.length-1){
           if(str === s.length-1) break
           ++str
           y=0
           x=str 
       }else{
       ++y
       ++x      
       }
     
   }
    let subMax = sub.map((v)=> Math.max(...v))
    let max = Math.max(...subMax)
    let from = subMax.indexOf(max)
    let to = sub[from].indexOf(max)
    return s.slice(from,to+1)
};

```