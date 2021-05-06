//백트래킹 문제.
//https://www.youtube.com/watch?v=lhy9mtUqZGc&list=PLDV-cCQnUlIaAKZbfdkMU01MrMkeTvVgP&index=3
// 참고

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let anwser=[]
    const BT = (idx=0, arr=[]) => {
         let set = new Set(arr);
        if(idx===nums.length){
            anwser.push(arr)
        return;
        } else {
            if(arr){
            nums.filter((v)=> !set.has(v)).forEach((v)=>{
           
                BT(idx + 1, [...arr, v])
           
            })
            } else {
                nums.forEach((v)=>{
                BT(idx + 1, [...arr, v])
                })
            }
        }
    }
    BT();
   return anwser
};