// 백트래킹 문제
//https://leetcode.com/problems/subsets/
//https://www.youtube.com/watch?v=gVijWUHWzAU&list=PLDV-cCQnUlIaAKZbfdkMU01MrMkeTvVgP&index=2


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let anwser=[];
    const BT = (idx=0,letters=[]) => {
        if(idx===nums.length){
           anwser.push(letters);
            return;
        }else{
        const c = nums[idx]
        idx++
        BT(idx,[...letters ,c])
        BT(idx,letters)
    }
    };
    BT();
    return anwser;
};