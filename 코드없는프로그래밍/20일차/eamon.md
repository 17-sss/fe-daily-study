```js

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let res=[];
    let Hash = new Map();
    for (let i=0; i<words.length; i++){
         if(Hash.has(words[i])){
             Hash.set(words[i],Hash.get(words[i]) +1)
            }else{
              Hash.set(words[i],1)
            }
}
const mapAsc = new Map([...Hash.entries()].sort((a,b)=>{
    if(b[1] === a[1]) return a[0] < b[0] ? -1 : 1 
    else return b[1] - a[1]
} )).entries();
    
   console.log([...Hash.entries()].sort((a,b)=>{
    if(b[1] === a[1]) return a[0] - b[0]
    else return b[1] - a[1]
} ))
   
    for(let i=0; i<k; i++){
        res.push(mapAsc.next().value[0])
    }
return res
}

    
    

```

```js

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
     let res=[];
    let Hash = {};
    for (let i=0; i<nums.length; i++){
         if(Hash[nums[i]]){
             Hash[nums[i]] += 1
            }else{
              Hash[nums[i]] = 1
            }
}
const key = Object.keys(Hash).sort((a,b)=>{
   return Hash[b] - Hash[a] 
})
  
 
    for(let i=0; i<k; i++){
        res.push(key[i])
    }
return res;
};
```

