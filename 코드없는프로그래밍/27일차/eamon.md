```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    //bottom up 방식
    const m = grid.length
    const n = grid[0].length
 
    for(let i=0; i < m; i++){
        for(let j=0; j<n; j++){
            const value1 = i ?  grid[i - 1][j] : -1; 
            const value2 = j ? grid[i][j - 1] : -1; 
             let min = 0;
            if (value1 <= -1 && value2 >= 0) min = value2;
            else if (value1 >= 0 && value2 <= -1) min = value1;
            else if (value1 <= -1 && value2 <= -1) min = 0;
            else min = Math.min(value1, value2);
            grid[i][j] = grid[i][j] + min;
        }
    }
    
return grid[m-1][n-1]
};

// 오른쪽 아래쪽으로만 움직인다.
//최소비용계단문제를 2디로만 바꿈
// 서브프라브럼 나누기 
// F(n) = cost(x,y) + min(F(x-1) F(x y-1))

//O(1)
//O(n)
//O(m,n)
```
```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 서브프라브럼으로 만들어라
    //top down 방식
    // fn = min (f(n-2) f(n-3) , f(n-5)) +1
    let sub = [0]
    //bottom up
    let i = 1;
    while(true){
        
        if(i>amount) break
        if(coins.indexOf(i) !== -1) sub.push(1)
        else{
            let idx = coins.map((v)=> i-v > -1 ? sub[i-v] : Infinity )
            
            let min = Math.min(...idx)
            sub.push(min + 1)
    }
           
           i++
    }
return sub[amount] === Infinity? -1 : sub[amount]
};
```