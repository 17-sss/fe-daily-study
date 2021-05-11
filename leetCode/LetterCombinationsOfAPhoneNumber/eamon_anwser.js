/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return [] 
    const nums = digits.split("")
const alpa = [["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]]
let arr = [];
    
    const dfs = (nums, i=0, curChar="") => {
        if(i===nums.length){
            arr.push(curChar)
            return;
        }
        alpa[nums[i]-2].forEach((v)=>{
            dfs(nums, i + 1, curChar + v )
        })
    }
    dfs(nums)
    return arr
    
};