function solution(d, budget) {
    d.sort((a,b) => a-b)
    let i = 0
    let cnt = 0 
    while(true){
        if(i === d.length) break; 
        budget = budget - d[i] 
        if(budget < 0) break;
        i++ 
        cnt++
    }
    //  DFS 를 싸용하려 다가 시간 초과 떴음

    // const dfs = (i=0,result=0,cnt=0) => {
    //     if(result> budget){
    //       mas = Math.max(cnt-1,mas)
    //         return;  
    //     } 
    //     if(i === d.length){
    //         mas = Math.max(cnt,mas)
    //         return;  
    //     }
    //     dfs (i+1,result + d[i],cnt+1)
    //     dfs(i+1, result , cnt )
    // }

    return cnt;
}