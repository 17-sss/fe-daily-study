# 1091. Shortest Path in Binary Matrix

링크 : https://leetcode.com/problems/shortest-path-in-binary-matrix/

자료구조  : linked list - queue - bfs


bfs 는 queue(선입선출(FIFO) 원칙) 을 이용하여 구현 -> A를 스택에 먼저 올렸으면 A 먼저 해석

js 에서 queue 는 node 와 linked list 로 구현해야함 -> 배열 pop() 과 shift() 로 구현하면 시간복잡도가 엄청나짐



```js

/**
 * @param {number[][]} grid
 * @return {number}
 */

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class queue {
constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
    

 enqueue(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
    
      dequeue(){
    if(!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer.value;
  }
}




var shortestPathBinaryMatrix = function(grid) {

    const myQ = new queue()

    if(grid[grid.length-1][grid[0].length-1] === 1) return -1
    myQ.enqueue([0,0,1])

    
    while(myQ.length){
          let [i,j,len] =  myQ.dequeue()
          if(i<0 || i>grid.length-1) continue;
        if(j<0 || j>grid[0].length-1) continue;
          if(grid[i][j]!==0) continue;
        else{
          grid[i][j] = len
        } 
        
        myQ.enqueue([i+1 ,j,len+1])
        myQ.enqueue([i+1, j+1,len+1])
        myQ.enqueue([i+1 ,j-1,len+1])
        myQ.enqueue([i,j+1,len+1])
        myQ.enqueue([i ,j-1,len+1])
        myQ.enqueue([i-1 , j,len+1])
        myQ.enqueue([ i-1 , j+1,len+1])
        myQ.enqueue([ i-1 , j-1,len+1])
          }


   
return grid[grid.length-1][grid[0].length-1] === 0 ?   -1 : grid[grid.length-1][grid[0].length-1]
```