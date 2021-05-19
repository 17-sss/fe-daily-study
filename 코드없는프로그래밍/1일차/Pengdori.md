### leetcode 704. Binary Search

이 문제의 의도는 경우의 수를 하나하나 줄여가면서 탐색하는 것이 목적인 문제인 것 같다.
따라서 내가 푼 방법은 문제의 출제 의도에서 벗어난다.
그렇기 때문에 탐색법을 외워두거나 이해하고 있으면 좋을 듯 하다.

1. 강의 풀이방법

```
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let pivot = Math.floor((left + right) / 2);

        if(nums[pivot] === target) return pivot;
        else if(nums[pivot] < target) left = pivot + 1;
        else if(nums[pivot] > target) right = pivot -1;
    }

    return -1;
};
```

2. 내 풀이방법

```
const search = (nums,target) => {
    // let sameNumber = (element) => element === target;
    // if(nums.findIndex(sameNumber)) {
    //     return nums.findIndex(sameNumber);
    // }
    // else {
    //     return -1;
    // }

    return nums.findIndex(v => v === target)
}
```

### leetcode 283. Move Zeroes

```
var moveZeroes = function(nums) {
    let init = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== 0) {
            nums[init] = nums[i];
            nums[i] = nums[init];
            init++;
        }
    }
    console.log(nums);
    for(let i = init; i<nums.length; i++) {
        nums[i] = 0;
    }
    return nums
};
```

음 이건 배열 복사가 안되서 내 마음대로 못 풀었다..

된다는 가정하에 나의 풀이는 이렇다.

```
var moveZeroes = function(nums) {
    let count = 0;
     nums.filter(v => {
        if(v === 0) count++;
        return v !== 0;
    })

    for(let i=0; i<count; i++) {
        result.push(0);
    }
};
```
