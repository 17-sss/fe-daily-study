```js
/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    const HashMap = {}
    for(let i =0; i<s.length; i++){
    if(!HashMap[s[i]]) HashMap[s[i]]=1
    else HashMap[s[i]]+=1
    }
     for(let i =0; i<s.length; i++){
   if(HashMap[s[i]] === 1) return i
    }
   return -1
};

```

```js

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const hash ={};
    const hash2 = {};
    for(let i=0; i<s.length; i++){
     
        if(!hash[s[i]] && !hash2[t[i]]){
          hash[s[i]] = t[i]   
            hash2[t[i]] = s[i]
        } 
        else {
         if(!hash[s[i]]| !hash2[t[i]]) return false
           if(hash[s[i]] !== t[i]) return false 
        }
    }
    return true
};
```

key 값 과 values 를 매칭하가 위해 두개 를선언했는데 좋은 방법이 아닌듯하다.