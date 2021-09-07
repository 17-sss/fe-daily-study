## 1710. Maximum Units on a Truck

- 풀이 방법 : 그리디 

- Unit 에 따라 Sorting 해서 가장 많은 것부터 넣기 시작했다.


```js
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    //DP?
    // Sorting
    // 가장 많은 것에 따라서 
    
    boxTypes.sort((a,b) => a[1] - b[1])
    let num= 0, unit = 0
    let sum = 0
    while(truckSize > 0){
        if(boxTypes.length === 0 && num === 0) break
        if(num === 0)  [num, unit] = boxTypes.pop()
        else {
            num--
            sum += unit
            truckSize--
        }
          
          }
    
  return sum
    
};

```
    

# 1578. Minimum Deletion Cost to Avoid Repeating Letters

- 그리디 문제 
- 문제 해석 잘못해서 해멨다.

```js
/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    //Stack?
    //Heap? - minimum cost 
 
    
    let char = ''
    let max = 0
    let costSum = 0
    s.split("").forEach((v, i) => {
        if(char !== v) {
         char = v
          max =  cost[i] 
        }
        else {
             if(max > cost[i])costSum += cost[i]
            else {
                 costSum += max
                 max = cost[i]
            }
        }
        
    })

    
    return costSum
};

```