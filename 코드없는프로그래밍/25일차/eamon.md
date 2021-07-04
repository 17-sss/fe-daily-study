피보나치 수열 DP

```js
const fib_array = [0,1];
// top- down 방식 dp
const fib_dp = (n) => {
if (n < fib_array.length) return fib_array[n]
else {
   const fib = fib_dp(n-1) + fib_dp(n-2)
   fib_array.push(fib)
   return fib
}
}
// bottom-up 방식 dp

const fib_dp_bottom = (n) => {
    if (n===0) return 0;
    else if(n===1)return 1;
    let fib_array = [0,1];
     for(let i =2; i<n+1; i++){
        fib_array.push(fib_array[i-1] + fib_array[i-2])
     }
     return fib_array[n]
    }
console.log(fib_dp(10), fib_dp_bottom(10))
```