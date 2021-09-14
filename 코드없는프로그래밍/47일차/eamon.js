//JS Heap 구현
class Heap {
 constructor() {
  this.heap = [];
 }

 add(val) {
  this.heap.push(val);
 }

 delete() {}

 make(arr) {
    this.heap = arr
 }

 swap(index1, index2) {
  let temp = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items[index2] = temp;
 }
 size() {
  return this.heap.length;
 }

 peek() {
  return this.items[0];
 }
}
