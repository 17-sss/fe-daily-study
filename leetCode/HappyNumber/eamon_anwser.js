const isHappy = function(num, log= new Set()) {
//     let arr = [num % 10];
//    while (Math.floor(num / 10)) {
//      num = Math.floor(num / 10);
//      arr.push(num % 10);
//    }
    
   const res = String(num).split("").map((v) => (+v) * (+v)).reduce((acc, cur) => (acc = acc + cur));
   if (res === 1 ) return true;
   if(log.has(res)) return false;
   log.add(res)
   return isHappy(res, log);
   };

   console.log(isHappy(2))
   
   //10의 배수가 나온다. -> ture
   // 재귀? callstack 이 너무 많이 
   // 6, 8  = 1 0 0
   
   // 124  = 1 + 4 + 16 = 21
   // 2 1 = 5 
   // 25 = 4 + 25 
   // 29 = 4 + 81
   // 85 = 64 + 25
   // 86 = 100 
   
   
  //  86 이나 68 이 나오면 ture
   
   // n = 2 
//     n=2
//     4
//     16
/////////////////////////////
//     1+36 = 37
//     9 + 49 = 58
//     25 + 64 = 89
//     64 + 81 = 125
//     1 + 4 + 25 = 
//     30 = 9 => false 
//     81 = 64 + 1
// 65 = 36 + 25 
// 61 = 36 + 1
///////////////////////
// 37 =9 + 49 => false
// 58 = 
   