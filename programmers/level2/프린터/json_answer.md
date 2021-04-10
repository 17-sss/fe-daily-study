## 요약

가장 높은 값 부터 대기 목록에서 나와야 하므로 sort를 사용했습니다.  
그리고 FIFO의 구조를 가져야 하므로 간단한 Queue를 구현했으며,  
Queue의 예외를 컨트롤 할 수 있는 환경이므로 변형 Queue를 사용했습니다.

## 풀이

```javascript
const Node = function (data) {
  this.val = data;
  this.next = null;
};
/*
  기존 Queue 구조
const Queue = function () {
  this.head = null;
  this.tail = null;
  this.append = (node) => {
    if (this.head) this.tail.next = node;
    else this.head = node;
    this.tail = node;
  };
  this.popleft = () => {
    const tmp = this.head;
    this.head = this.head.next;
    return tmp;
  };
};
*/

// 연산을 줄이기 위해 Queue의 생성자로 Node를 받도록 설정!
const Queue = function (node) {
  this.head = node;
  this.tail = node;
  this.append = (node) => {
    this.tail.next = node;
    this.tail = node;
  };
  this.popleft = () => {
    const tmp = this.head;
    this.head = this.head.next;
    return tmp;
  };
};

function solution(priorities, location) {
  let cnt = 0;
  const queue = new Queue(new Node([priorities[0], 0]));
  for (let idx = 1; idx < priorities.length; idx++) {
    queue.append(new Node([priorities[idx], idx]));
  }
  priorities.sort((a, b) => b - a);
  let i = 0;
  while (true) {
    const node = queue.popleft();
    if (node.val[0] === priorities[i]) {
      cnt++;
      i++;
      if (location === node.val[1]) return cnt;
    }
    queue.append(node);
  }
}
```
