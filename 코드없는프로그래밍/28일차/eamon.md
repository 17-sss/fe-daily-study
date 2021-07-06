
- top down 시간 초과

```js

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
 //top down
 let cnt = 0;
 const recur = (str) => {
  if (str.length <2) {
   if(+str>0) ++cnt;
      if(str === "") ++cnt
   return;
  }
  let first = [str.slice(0, 1), str.slice(1, str.length)];
  let second = [str.slice(0, 2), str.slice(2, str.length)];
     if(+first[0] >0) recur(first[1]);
     if (+second[0]>9 && +second[0] < 27) recur(second[1]);
     
     return;
 };

 recur(s);
 return cnt;
};



```


```js

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //subarray -> 길이도 모르고 value 도 모른다. -> dp 로 풀자
    // max subarry with last element
    // 
    
    let subarr = []
    let strIdx = []
    for (let i=0; i<nums.length; i++){
        if(i===0 ){
           subarr.push(nums[i])
            strIdx.push(0)
    }else{
        if(subarr[i-1] + nums[i]>nums[i]){
            subarr.push(subarr[i-1] + nums[i])
            strIdx.push(strIdx[i-1]) 
        }else{
            subarr.push(nums[i])
            strIdx.push(i) 
        }
    }
    }
    return Math.max(...subarr)
};

```