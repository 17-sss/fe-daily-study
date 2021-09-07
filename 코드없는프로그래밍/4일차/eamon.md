### 1. find the Duplicate number

1) 부르트 포스 법
```js
var findDuplicate = function(nums) {
    let i = 0;
    let j;
    while(i<nums.length){
        j = i +1;
     while(j<nums.length ){
     if(nums[i] === nums[j]){
         
         return nums[j]
     }
         j++
     }
        
        i++   
    }


    
};
```

  2) O(n) 의 풀이
```js

 var findDuplicate = function(nums) {
    const arr = new Array(nums.length - 1).fill(false);
    
    for(let i=0; i<nums.length; i++){
        if(arr[nums[i]]) return nums[i]
            else arr[nums[i]] = true
        
    }
 }
   
```

  3) 공간 복잡도 O(1) 의 풀이
```js 
var findDuplicate = function(nums) {
 for(let i=0; i<nums.length; i++){
     if(nums[Math.abs(nums[i]) -1] > 0 ){
        nums[Math.abs(nums[i]) -1] =  -1*nums[Math.abs(nums[i]) -1]
          }
        else{
        return Math.abs(nums[i]) 
        } 
        
    }
        
    }

```

### 2. 2sum

```js

var twoSum = function(nums, target) {
    console.log(nums);
    const arr = nums.map((v,i) => [v,i])
    // onlogn
    arr.sort((a,b) => a[0]-b[0])
    
    let start = 0;
    let end = nums.length -1;
    
    while(start<=end){
        
      if(arr[start][0] + arr[end][0] > target){
          end--
      }else if(arr[start][0] + arr[end][0] < target){
          start++
      }else if(arr[start][0] + arr[end][0] === target){
        return [arr[start][1], arr[end][1]]   
      }
    }
    
};

```


3. 3Sum 
중복제거 못함
```js
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    
    let ans = [];
    let one=0;
    let two;
    let three;
    if(nums.length<3) return []
    
    while(one<nums.length){
    
        two = one + 1
        three= nums.length-1
        
        if(nums[one] > 0) return ans;
        
        while(two<three){
         if(nums[two] + nums[three] > -1* nums[one]){
          three--
        }else if(nums[two] + nums[three] < -1* nums[one]){
          two++
      }else if(nums[two] + nums[three] === -1* nums[one]){
        ans.push([nums[one],nums[two],nums[three]])
          two++;
          three--
      }
                 }
          one++
        }
    return ans     
    }

```