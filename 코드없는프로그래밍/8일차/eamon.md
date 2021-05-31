1. addString
   모든 string 을 다 while 을 돌고 carry 가 존재하면 carry 를 push 하는 로직을 생각하기가 조금 오래걸렸다. 

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
       while(true){
           if(num1.length< num2.length){
        num1 = "0" + num1
                 }
                 if(num1.length> num2.length){
        num2 = "0" + num2
                 }
                    if(num1.length === num2.length)break
       }
  

    ans=[]
    i = num1.length -1;
    let carry= 0
    while(0<=i){
        
        let now =(+num1[i]) + (+num2[i]) + carry
        carry = Math.floor(now / 10)
        ans.push(now%10)
      
        i--
    }
    if(carry) ans.push(carry)

    return ans.reverse().join("")==="00" ? "0" : ans.join("")
};


```