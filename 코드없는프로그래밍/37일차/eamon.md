```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    const BT = (level,arr,num) => {
        if(level === nums.length) {
            result.push(arr)
            return
        }
        
        for (const ele of num) {
        BT(level+1,[...arr,ele], num.filter((v) => v !== ele))
        }
    }
    BT(0,[],nums)
    return result
};
```

Q. 레퍼런스 참조로 구현하는 건 뭘까?
```js

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let length = nums.length
    let level = 0;
    const BT = (arr) => {
        if(level === length) {
            result.push(arr)
            return
        }
        
        for (const ele of nums) {
            level++
            nums = nums.filter((v) => v !== ele)
        BT([...arr,ele])
        // 아직 레벨이 끝나지 않았으니까 --
            level--
            nums.push(ele)
        }
    }
    BT([])
    return result
};

```

BT 함수의 렉시컬환경은 선언될 때 형성되므로 바깥에서 참조되는 변수들을 선언되기 전에 적절히 변하게 해주고 선언한뒤에 다시 제자리로 되돌리기만하면 된다.