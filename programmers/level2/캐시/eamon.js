class Node {
 constructor(data, next) {
  this.data = data;
  this.next = next;
 }
}

class queue {
 constructor() {
  this.head = null; // 제일 앞 노드
  this.rear = null; // 제일 뒤 노드
  this.length = 0; // 노드의 길이
  this.set = new Set();
 }

 enqueue(newdata) {
  const node = new Node(newdata);
  if (!this.head) {
   this.head = node;
  } else {
   this.rear.next = node;
  }
  this.rear = node;
  this.set.add(newdata);
  this.length++;
 }

 dequeue() {
  if (!this.head) {
   // 헤드가 없으면 한 개도 없는 것이므로 false를 반환.
   return false;
  }
  const data = this.head.data; // head를 head의 다음 것으로 바꿔주고 뺀 data를 return
  this.head = this.head.next;
  this.set.delete(data);
  this.length--;

  return data;
 }

 has(data) {
  return this.set.has(data);
 }
}

function solution(cacheSize, cities) {
 cities = cities.map((v) => v.toLowerCase());
 if (cacheSize === 0) {
  return cities.length * 5;
 }
 let que = [];
 let time = 0;
 for (const city of cities) {
  const idx = que.indexOf(city);
  if (idx !== -1) {
   time += 1;
   que = que.filter((v) => v !== city);
   que.push(city);
  } else {
   if (que.length === cacheSize) {
    que.shift();
   }
   time += 5;
   que.push(city);
  }
 }

 var answer = time;
 return answer;
}
