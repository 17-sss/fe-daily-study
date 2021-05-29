1) 첫번째 방법
   
```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length -1
    let m = matrix[0].length
    //첫번째 방법
    for(let i=n; i>=0; i--){
        if(matrix[i][0] > target ) n--
        else break;
    }
    
    for(let i=n; i>=0; i--){
         for(let j=0; j< m; j++){
        if(matrix[i][j] > target ) break;
        else if (matrix[i][j] === target ) return true
         }
    }
    return false
```
2) 두번째 방법

    ```js
    var searchMatrix = function(matrix, target) {
    let n = 0;
    let copy = [];
    
    while(n< matrix.length){
        copy = [...copy, ...matrix[n] ]        
         n++
    }
    
    
    return copy.indexOf(target) !== -1 
    }
    ```
3) 마지막 방법
```js
    var searchMatrix = function(matrix, target) {
    let pivotY = matrix.length -1;
    let pivotX = 0; 
    while(pivotY>=0 && pivotX<=matrix[0].length -1){
    if(matrix[pivotY][pivotX] > target) {
        pivotY--
    }else if(matrix[pivotY][pivotX] < target){
        pivotX++
    }else return true

    }
    return false
    
};
```