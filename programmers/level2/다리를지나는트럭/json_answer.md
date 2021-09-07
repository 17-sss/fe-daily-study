## 요약

다리 길이 만큼의 배열을 만들고 그 배열 안에 트럭의 위치를 이동시키면서 소요 시간을 계산합니다.  
트럭이 새로 진입할 때는 배열의 시작 점에 추가되며, 트럭이 나갈 때는 끝 부분에서 삭제되므로 이중연결 리스트의 일부만 구현하여 사용하는 걸로!

**이중연결 리스트**

```javascript
// 이중연결 리스트 구현을 위해 prev, next 존재.
const Node = function (val = 0) {
  this.val = val;
  this.prev = null;
  this.next = null;
};

// append, popLeft 는 필요없으므로 생략!
const DoubleLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.appendLeft = (node) => {
    if (!this.head) {
      this.tail = node;
    } else {
      this.head.prev = node;
      node.prev = this.head;
    }
    this.head = node;
  };
  this.pop = () => {
    const tail = this.tail;
    this.tail = this.tail.prev;
    return tail.val;
  };
};
```

**solution**

```javascript
function solution(bridge_length, weight, truck_weights) {
  let sec = 0;
  // shift()를 쓰지않기 위함.
  let count = 0;
  let loadWeight = 0;
  const list = new DoubleLinkedList();
  for (let i = 0; i < bridge_length; i++) {
    // 다리의 길이만큼 빈 값을 생성
    list.appendLeft(new Node());
  }
  while (count < truck_weights.length) {
    loadWeight -= list.pop();
    if (loadWeight + truck_weights[count] <= weight) {
      loadWeight += truck_weights[count];
      list.appendLeft(new Node(truck_weights[count]));
      count++;
    } else {
      list.appendLeft(new Node());
    }
    sec++;
  }
  return sec + bridge_length;
}
```
