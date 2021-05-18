// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let sum = 0;
    let res = 10**5;
    
    for (let j = 0; j < nums.length; j++) {
    sum += nums[j];

        while (sum >= target) {
      res = Math.min(res, j - start + 1);
       
      sum -= nums[start];
      start++;
    }
    }
    return res === 10**5 ? 0 : res
}
    
//    let arrNum =1;
//     let idx = 0;
//    let sum=0;
    
//     const slide = (index,_sum, _arrNum) => {
//         _sum -= nums[index]
//         _sum += nums[index+_arrNum]
//         return _sum
//     }
    
   
//    while(true){
//        sum=0;
//        idx = 0;
      
//        for(let i=0; i<arrNum; i++){
//         sum += nums[i]    
//         }
       
//        if(arrNum===nums.length) return 0;
//        while(true){
//            if(target===sum) return arrNum;
//             console.log(sum)
//            if(idx ===nums.length-arrNum)break;
    
//            sum = slide (idx,sum, arrNum)
       
      
//            idx++
//        }
//        arrNum++
//    }
    
    
//   let res = Infinity;
//   let sum = 0;
//   let start = 0;

//   for (let j = 0; j < nums.length; j++) {
//     sum += nums[j];

//     while (sum >= target) {
//       res = Math.min(res, j - start + 1);
//         console.log(res)
//       sum -= nums[start];
//       start++;
//     }
//       console.log(sum, start, res)
//   }

//   return res === Infinity ? 0 : res;

