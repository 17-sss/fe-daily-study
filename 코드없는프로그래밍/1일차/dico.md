### leetcode 704. Binary Search

target과 일치하는 요소의 index를 반환하는 문제.
1. Left와 Right 변수를 만든다.
2. while문으로 left <= right 가 충족될 때 실행될 수 있는 로직을 만든다.
    - 가운데를 가리키는 pivot 변수를 만든다. right + left / 2 (홀수의 경우 내림할 것)
    - 가운데 인덱스를 가진 match 변수를 만든다.
    - if조건: match = target 의 경우, pivot을 리턴.
    - if조건: match > target 의 경우, right을 pivot - 1 로 변경
    - if조건: match < target 의 경우, left를 pivot + 1 로 변경
3. while을 완료해도 리턴되지 않을 경우, -1을 리턴.

```js
const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {

        let pivot = Math.floor((left + right) / 2);

        if(nums[pivot] === target) return pivot;
        else if (nums[pivot] < target) left = pivot + 1;
        else if (nums[pivot] > target) right = pivot - 1;
    }

    return -1;
};
```


### leetcode 283. Move Zeroes

모든 0을 오른쪽 끝으로 보내는 문제.
0을 찾아서 오른쪽으로 보내는 대신, '0이 아닌 숫자'들을 찾아서 왼쪽으로 보낸다.
(이렇게 하면 bubble swap을 하는 것보다 시간 복잡도가 줄어든다.)

```js
const moveZeroes = function(nums) {
    let sIdx = 0;                               //start index의 약자로 시작포인터를 나타냄.

    for(let i = 0; i < nums.length; i++){       //for문의 nums[i]는 0이 아닌 숫자를 찾기 위함.
        if (nums[i] !== 0) {                    //0이 아닌 숫자를 시작포인터가 가리키는 숫자에 덮어써서 왼쪽으로 몰아넣기.
            nums[sIdx] = nums[i];
            nums[i] = nums[sIdx];
            sIdx++;                             //시작포인터를 한칸씩 오른쪽으로 옮겨주기.
        }
    }
    for(; sIdx < nums.length; sIdx++) {         //다시 for문을 돌려서 시작포인터가 멈춘 곳에서부터 0으로 재할당.
        nums[sIdx] = 0;
    }
    return nums;
};
```