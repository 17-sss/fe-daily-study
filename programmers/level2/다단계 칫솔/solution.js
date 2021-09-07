function solution(enroll, referral, seller, amount) {
    var answer = [];

    let map = {}

    let sellerMap = {
        "-" : {
             amount : 0,
            sell : 0,
    }
    }
    
    for(let i=0; i<enroll.length; i++){
        if( map[referral[i]]){
            map[referral[i]] = [...map[referral[i]], enroll[i]]
    }else{
    map[referral[i]] =  [enroll[i]]       
    }
  
     }
    
      for(let i=0; i<seller.length; i++){
          if(sellerMap[seller[i]]) {
               sellerMap[seller[i]].amout += amount[i]
          }else{
        sellerMap[seller[i]] = {
            amount :    amount[i],
            sell : 0
            
            }            
          }
     
    }
    

    
    const dfs = (name) => {
     if(!sellerMap[name])  sellerMap[name] = {
                  amount : 0,
                 sell : 0,
              }
          
   

        if(!map[name]){
       
 // 더 이상 내려갈 곳이 없는 노드의 영역
  // 해당 영역에서 이득 분배 관련 계산을 실시  
      
        const income = sellerMap[name].amount*100 < 10 ? 0 : sellerMap[name].amount*100*0.1
         sellerMap[name].sell = sellerMap[name].amount*100 - income
            return  income
        }else{
        const sum =  map[name].reduce((acc,cur) =>{
           acc += dfs(cur) 
        // 1원 미만의 분배금액인 경우엔 분배 X
        // 소수점은 포함하지 않으므로 버림
     
            return acc
            },0)
        const income_ = sellerMap[name].amount*100 < 10 ? 0 : sellerMap[name].amount*100*0.1 
        const income = sum  < 10 ? 0  
        
        sellerMap[name].sell = income_+ income - (income_+ income)*0.1
        

    
            
         return  (income_+ income)*0.1



        
        }
        
         
    }
    dfs('-')
 
    return enroll.map(v => sellerMap[v].sell)
}