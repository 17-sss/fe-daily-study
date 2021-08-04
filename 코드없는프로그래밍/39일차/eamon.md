
## 39. Combination Sum

 문제 [링크] https://leetcode.com/problems/restore-ip-addresses/submissions/

 자료구조 : BackTracking  

 실패! 나중에 다시 시도

 ```js
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
       const BT = (partial, s, num) => {
        if(s.length == 0 && num == 0 ) return [partial];
        if(s.length < num || s.length > num * 3 || num == 0) return [];
  
        const oneNum = BT([...partial, s.slice(0, 1)], s.slice(1), num - 1);

            if(s.length === 1 || s.slice(0, 1) === "0") return oneNum 

      const twoNums = BT([...partial, s.slice(0, 2)], s.slice(2), num - 1);
          if(s.length === 2 || s.slice(0, 3) > 255)
    return [...oneNum, ...twoNums] 

  const threeNums = BT([...partial, s.slice(0, 3)], s.slice(3), num - 1);
  
        return [...oneNum, ...twoNums, ...threeNums];
        
        
    }
 
    
    var restore = BT("", s, 4);

  var ret = [];
  for(var i = 0; i < restore.length; i++) {
    ret.push(restore[i].join("."));
  }

  return ret;
};
    


 ```