## Design HashMap

```js
var MyHashMap = function() {
  this.data = [];
};

MyHashMap.prototype.put = function(key, value) {
  this.data[key] = value;
};

MyHashMap.prototype.get = function(key) {
  const value = this.data[key];
  return value !== undefined ? value : -1;
};

MyHashMap.prototype.remove = function(key) {
  delete this.data[key];
};
```