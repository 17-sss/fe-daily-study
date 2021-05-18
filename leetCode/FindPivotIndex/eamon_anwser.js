/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    
    
    let rightSum = nums.reduce((acc,cur)=> acc += cur) - nums[0]
    
    let leftSum = 0;
    let idx = 0;
    
    while(true){
        if(idx===nums.length) return -1;
        if(leftSum === rightSum) break;
        idx++
        rightSum -= nums[idx]
        leftSum += nums[idx-1]
    }
    return idx
};