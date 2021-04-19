class NodeQueue{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}
class Queue{
    constructor (){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(value){
        let nodeQueue = new NodeQueue(value);
        if(this.size == 0){
            this.head = nodeQueue;
        }else{
            this.tail.next = nodeQueue;
        }
        this.tail = nodeQueue;
        this.size++;
    }
    dequeue(){
        if(this.size== 0){
            return null;
        }
        let value = this.head.value;
        this.head = this.head.next;
        this.size--;
        if(this.size == 0){
            this.tail = null;
        }
        return value;
    }
    isEmpty(){
        return this.size == 0;
    }
}
const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

const map = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

function solution(maps) {
  const n = maps.length - 1;
  const m = maps[0].length - 1;
  const queue = new Queue();
  if (!maps[n - 1][m] && !maps[n][m - 1]) return -1;
  queue.enqueue([0, 0, 0]);
  var answer = 1;

  const check = (maps, arr) =>{
   return arr[0] > -1 && arr[1] > -1 && maps[arr[0]][arr[1]] ;
  }
  while (queue.isEmpty) {
    const curPoint = queue.dequeue();
    if (curPoint[0] === n && curPoint[1] === m) {
      answer += curPoint[2];
      break;
    }

    if (check(maps, [curPoint[0] + 1, curPoint[1]]))
      queue.enqueue([curPoint[0] + 1, curPoint[1], curPoint[2] + 1]);
    if (check(maps, [curPoint[0], curPoint[1] + 1]))
      queue.enqueue([curPoint[0], curPoint[1] + 1, curPoint[2] + 1]);
    if (check(maps, [curPoint[0] - 1, curPoint[1]]))
      queue.enqueue([curPoint[0] - 1, curPoint[1], curPoint[2] + 1]);
    if (check(maps, [curPoint[0], curPoint[1] - 1]))
      queue.enqueue([curPoint[0], curPoint[1] - 1, curPoint[2] + 1]);
  }

  return answer;
}

console.log(solution(maps));
