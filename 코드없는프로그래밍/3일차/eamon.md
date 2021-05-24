1. merge
```js
var merge = function(intervals) {
    
    intervals.sort((a,b) => a[0] - b [0])
    
    let idx = 0
    let NestStart;
    let end;
    let mergearr = intervals[0];
    
    let answer=[];
    while(idx<intervals.length-1){
          end = mergearr[1]
    NestStart = intervals[idx+1][0]
    if(end >= NestStart){
      mergearr=[mergearr[0], Math.max(mergearr[1],intervals[idx+1][1])]
        
    }else {
        answer.push(mergearr);
        mergearr= intervals[idx+1]
         
    };
        
        idx++    

        
};
   answer.push(mergearr);
    return answer
    
};
```

2.Shortest Unsorted Continuous Subarray
```js
var findUnsortedSubarray = function(nums) {
    
    let numsCopy = [...nums].sort((a,b)=>a-b)
    let realright = 1;
    let realleft = 1;
    let left = 0;
    let right = nums.length-1;
  while(left < right){
      if(numsCopy[left] === nums[left]){
          left++
      } else{
          realleft = null;
      }
   if(numsCopy[right] === nums[right]){
        right--
   } else{
          realright = null;
      }  
     if(realright === null && realleft === null) break;
  }
    if( right === left) return 0
    return right - left + 1
    
};
```

코드로 풀기 쉽다고 ? 아닌뎅 흑흑

```js
var findUnsortedSubarray = function(nums) {
    
    let minidx = nums.indexOf(Math.min(...nums))
    let maxidx = nums.indexOf(Math.max(...nums))
    let lefttemp = null;
    let righttemp = null;
    console.log(minidx, maxidx)

    let left = 0;
    let right = nums.length-1;
    
  while(left < right){
  if(nums[left] > nums[left+1]){
     lefttemp = minidx - left;
     
  } else {
      left++
  }
      
       if(nums[right] < nums[right-1]){
     righttemp = right - maxidx;
     
  } else {
      right--
  }
      
      if(righttemp && lefttemp) break;
  }
    console.log(righttemp, lefttemp)
    
};
```


여기까지만 구현하고 주말에 이어서 구현하겠습니다.
질문) 두포인트로 꺽이는 부분 찾는 방법이 어렵다.