1. groupAnagrams 알파벳을 하나하나 쓰기 귀찮아서 ASCII 코드 넘버를 이용해서 배열에 넣어서 저장했다.
2. 
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const alp = new Array(26).fill(0)
    const offset = 97
    let res = {}
    let keys = []
    const getKey = (str) => {
   let curArr = [...alp]
   
   let numArr = str.split("")
    numArr.forEach((v)=>{
        curArr[v.charCodeAt(0) - offset]++
    })
   
    const key = curArr.map((v, i) => {
        if(v !== 0){
     return  String.fromCharCode(i+offset) + `${v}` }
    else return ''}).join("")
    
return key
    }
    
    strs.forEach((str) =>{
        if(!res[getKey(str)]){
            keys.push(getKey(str))
            res[getKey(str)] = [str]
        }else {
             res[getKey(str)] = [...res[getKey(str)] , str]
        }
        
    })
    
    
    return keys.map((v)=> res[v])
};

```