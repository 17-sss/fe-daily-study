
## 39. Combination Sum

 문제 [링크] https://leetcode.com/problems/combination-sum/

 자료구조 : BackTracking  

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   
    let result = []
    let num;
    const BT = (arr,sum,sub=[]) => {
        if(sum < 0) return 
        if(sum === 0) result.push(sub)
        
        for(let idx=0; idx<arr.length; idx++){
            BT(arr.slice(idx),sum - arr[idx], [...sub, arr[idx]])    
        }
        

    }
    
    BT(candidates,target)
    
    return result
};
```