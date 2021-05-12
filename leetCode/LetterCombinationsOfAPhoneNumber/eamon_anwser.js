
var letterCombinations = function(digits) {
    if(!digits) return [] 
    const nums = digits.split("")
const alpa = [["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]]
let arr = [];
    //원시타입 , 얕은복사 , 클로저 // 렉시컬 환경. 

// = > 값을 재할당하기 때문에 생긱는 문제
    const dfs = (i=0, curChar="") => {
        if(i===nums.length){
            arr.push(curChar)
            return;
        }
        alpa[nums[i]-2].forEach((v)=>{
            curChar += v
            dfs( i + 1, curChar )
        })
    }
    dfs()  
    return arr
    
};



letterCombinations("24")
