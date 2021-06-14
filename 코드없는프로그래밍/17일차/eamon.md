
수업을 들으면서 들은 의문 
- 왜 해쉬를 랜덤 생성? 바로 인덱스 생성하면 안되나?


 처음시도 , map 을 Array 에 저장. 220 ms 언저리 나옴

```js
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.map = new Array(100000000).fill([])
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const idx = key % 100000000;
   this.map[idx] = this.map[idx].filter((v) => v[0] !==key)
    this.map[idx] = [...this.map[idx], [key,value] ]
     
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
   
    const idx = key % 100000000;
    const res = this.map[idx].filter((v) => v[0] === key)
    return res.length ? res[0][1]:-1
    
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const idx = key % 100000000;
    this.map[idx] = this.map[idx].filter((v) => v[0] !==key)
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

 ```

```js
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.map = new Array(10000000).fill([])
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const idx = key % 10000000;
    this.map[idx] =[key,value] 
     
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
   
    const idx = key % 10000000;
    const res = this.map[idx]
    return res.length ? res[1]:-1
    
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const idx = key % 10000000;
    this.map[idx] = []
}
/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
```

두번째 방법 각 어레이에 하나씩 할당 (런타임에러)

![KakaoTalk_20210614_221432632](https://user-images.githubusercontent.com/68339352/121898728-a55eb780-cd5e-11eb-81fc-5060b7ac2cd0.png)
