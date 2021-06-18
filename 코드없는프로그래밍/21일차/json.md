## Insert Delete GetRandom O(1)

### 요약

영상의 풀이를 참고했습니다!  
insert와 remove에서 예외 처리가 필요한 문제입니다.

**코드**

```js
var RandomizedSet = function() {
  this.map = new Map();
  this.arr = [];
};

RandomizedSet.prototype.insert = function(val) {
  const result = this.map.has(val);
  if(!result) {
    this.map.set(val, this.map.size);
    this.arr.push(val);
  }
  return !result;
};

RandomizedSet.prototype.remove = function(val) {
  const result = this.map.has(val);
  if(result) {
    const last = this.arr.pop();
    if(val != last) {
      this.arr[this.map.get(val)] = last;
      this.map.set(last, this.map.get(val));
    }
    this.map.delete(val);
  }
  return result;
};

RandomizedSet.prototype.getRandom = function() {
  return this.arr[parseInt(Math.random() * this.map.size)];
};
```
