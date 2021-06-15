```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
 const hash = {};
    s.split("").forEach((v) => {
        if(hash[v]) hash[v] += 1
        else hash[v] = 1 
    })
    
    for(let i=0; i<t.length; i++){
        if(hash[t[i]]) hash[t[i]] -= 1
        else return false
    }
    
    Object.values(hash).forEach(v=> {
        if(v!== 0) return false 
    })
    
    for(let i=0; i< Object.values(hash).length; i++){
        if( Object.values(hash)[i] !== 0) return false
    }
    return true
};
```

 for 문 세번돌리면 시간복잡도가 몇이지? O(n) 인가 단일뽀문 세개기 때문에

 ```js
 var isAnagram = function(s, t) {
    const sArr = s.split("").sort()
     const tArr = t.split("").sort()
    if(s.length !== t.length) return false
    for(let i=0; i<s.length; i++){
  if(sArr[i] !== tArr[i]) return false
    }
     return true
 ```


 ```js
 /**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const hash={}
    const sArr = s.split(" ")
    if(pattern.length !== sArr.length) return false
    for(let i=0; i<pattern.length; i++){
        if(hash[pattern[i]]) {
            if( hash[pattern[i]] !== sArr[i]) return false
        } else{
            if(Object.values(hash).indexOf(sArr[i]) !== -1) return false
            hash[pattern[i]] = sArr[i]
            
        } 
    }
    return true
};
 ```
 js 의 오브젝드는 value 가 유일하지 않다.