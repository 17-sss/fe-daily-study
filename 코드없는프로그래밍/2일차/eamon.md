1. Sort color

```js

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const swap = (idx1,idx2) => {
        let temp = nums[idx1]
        nums[idx1] = nums[idx2] 
        nums[idx2] = temp
    }


let index0 = 0;
let index1 = 0;
let index2 = nums.length -1;

while(index1<=index2){
    
    if(nums[index1]=== 0){
        swap(index0,index1)
        index0++
        index1++
    }
    else if (nums[index1]=== 2){
        swap(index1,index2)
        index2--
    } else {
        index1++
    }
}
console.log(nums)
};

```

퀵 sort 를 이용한 문제풀이로 pivot 인 index2 와 비교를 하면서 swap 을 하는 것이 관건이다.


2. Merge Sorted Array
```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let idx1 = m-1
    let pivot = nums1.length -1
    let idx2 = n -1
    if(idx2 < 0 ) return;
    
    
    while(idx1 >= 0 && idx2 >= 0){
        if(nums2[idx2] > nums1[idx1]){
            nums1[pivot] = nums2[idx2]
            idx2--
        }else {
            nums1[pivot] = nums1[idx1]
            idx1--
        }
        pivot--
    }
    
while(0<= idx2 ){
 nums1[pivot]  = nums2[idx2];
    idx2--
    pivot--
}
    console.log(nums1)
}
    
```

3. find peak element

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    //바이너리 서치 => 주어진 어레이를 반으로 자른다. 
    let pivot = 0;
    
    let left = 0;
    let right = nums.length -1;
    let num;
    let next;
    if(right<1) return 0;
    
    while(left < right){
        
        
        pivot = Math.floor((left + right) /2)
   
        num = nums[pivot]
        next = nums[pivot+1]
        
      console.log(num,left,right)
        
        if(num < next){
            //peak 가 오른쪽
            left = pivot +1
        }else {
            //peak 가 왼쪽
            right = pivot
        }
        
    }
    
    return left
};
```

저번 카카오 문제 3번이랑 비슷한 문제이다. peak 를 찾기위해서 pivot 을 중간을 잡고 +1 인덱스 값을 비교하면서 peak 값을 찾으면 O(logn) 타임컴플렉시티로 계산할수 있었다.