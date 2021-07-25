함수에 값을 넣어주는 경우. -> 불필요한 deepcopy

```js

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let arr = []
    const bt = (index=0,sub=[]) => {
    if(index === nums.length) {
        arr.push(sub)
        return 
    }
        bt(index+1, [...sub, nums[index]])
        bt(index+1, sub)
    }
    
    bt()
    return arr
    
};

```

리컬시브 -> 이터레이티브 외부 stack 을 만든다. 