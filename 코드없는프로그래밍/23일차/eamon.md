```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
//    //twopoint
//     const arr = nums.map((v)=>v ? -1 : 1)

//     let max = 0;
//     for(let i=0; i<arr.length; i++){
//         let sum = arr[i];
//         let len = 0;
//     for(let j=i+1; j<arr.length; j++){
//         sum += arr[j]
//         if(sum === 0) {
//          max = Math.max(max,j - i + 1)   
//         }
//     }
//     }
   
//     return max 
    
  let max = 0;
   const sum = {0:[-1]}
    const arr = nums.map((v)=>v ? -1 : 1)
    
    arr.reduce((acc,cur,i)=>{
     
        if(sum[acc+cur]) sum[acc+cur] = [...sum[acc+cur], i]
        else sum[acc+cur] = [i]
        acc = acc+cur
        return acc
    },0)
    Object.values(sum).filter(v=>v.length>1).forEach(s=>{
         max = Math.max(max, s[s.length-1]-s[0]) 
    })
    return max

    
};

```