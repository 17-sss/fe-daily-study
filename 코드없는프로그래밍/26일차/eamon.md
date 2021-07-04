```js
var climbStairs = function(n) {
    
    //F(n) = F(n-1) + F(n-2)
    n= n-1
     if (n===0) return 1;
    else if(n===1)return 2;
    let fib_array = [1,2];
     for(let i =2; i<n+1; i++){
        fib_array.push(fib_array[i-1] + fib_array[i-2])
     }
     return fib_array[n]
    
};
```

//피보나치 풀었던 거랑 거의 똑같이 풀었다.

```js

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let arr = [0,0]
    //Fn = Math.min(F[n-2] + cost[n-2] , F[n-1] + cost[n-1])
    for(let i=2; i< cost.length+1; i++){
        arr.push(Math.min(arr[i-2] + cost[i-2] , arr[i-1] + cost[i-1]))
    }
    console.log(arr)
    return arr[cost.length]
};
```