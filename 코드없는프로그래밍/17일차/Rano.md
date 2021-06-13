## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 11일]

### **1.** HashTable 개념 정리

-   `Insertion / find`: _O(1)_ 의 시간복잡도
    -   이 특성 상 `sort`는 불가능
-   **_key - value_** 관계를 가짐
    ```js
    // Object 형식으로 예를 듦
    const objMap = {
        Apple: 5, // key - value
        Banana: 2,
        Orange: 10,
        /* ... */
    };
    ```
    여기서 _Banana_ 를 찾으려면
    -   **Array**의 경우 _O(n)_ 의 시간복잡도를 가짐.
    -   **HashTable**의 경우 _O(1)_ 의 시간복잡도를 가짐.
        -   Array처럼 순회하는게 아니라 바로 찾음
-   **HashTable**에는 `hashFunction`이 있음.
    -   output space가 정해져있고 input에 따라 Distribution이 됨  
         (input(key 값)에 따라 hashCode로 변경해주는 듯)
        -   hashCode로 변경된 값이 충돌이 날 수 있는데,  
             **HashMap**을 만드는데에는 아무 이상이 없음
    -   충돌을 최소화 위해 만들어졌음.
        > Hash Table과 Hash Map은 다른 것 같은데...?  
        > 참고: [Java에서의 HashMap과 HashTable의 차이](https://devlog-wjdrbs96.tistory.com/253)
-   **HashTable**은 내부적으로 LinkedList를 활용하는 듯  
    hashCode가 생성 될 때 Apple의 hashCode는 _23438498_ 이라면  
    내부적으로 **% 10**을 하여 _8_ 을 반환, 그리고 8번째 index에 key-value를 생성해줌  
    만약 다음에 들어오는 아이템이 **% 10** 했을 시 같다면, 해당 index에 넣어주되  
    Apple을 뒤에 바로 생성해 줌!
    -   각 index의 위치에 많은 값이 있다면 시간복잡도는 _O(n)_ 이 되어버리는데  
         이건 걱정할 일은 아님.  
         내부적으로 Handling을 해줌. 그러므로 _O(1)_ 이라고 생각하고 있기!!
    -   참고용 스샷  
         <img src="https://user-images.githubusercontent.com/33610315/121799476-541fcc80-cc67-11eb-83a8-232d8591b9b7.png" width=300 />

### **2.** Leetcode - Design HashMap

[문제: LeetCode - 706. Design HashMap](https://leetcode.com/problems/design-hashmap/)

-   강의엔 없는 문제. HashMap 구조를 알아보려 푸는 문제!

**코드**

-   코드 (1) : Prototype

    ```js
    /**
     * Initialize your data structure here.
     */
    var MyHashMap = function () {
        hashMap = {};
    };

    /**
     * value will always be non-negative.
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    MyHashMap.prototype.put = function (key, value) {
        hashMap[key] = value;
    };

    /**
     * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
     * @param {number} key
     * @return {number}
     */
    MyHashMap.prototype.get = function (key) {
        const result = hashMap[key];
        return typeof result === 'undefined' || typeof result === 'null'
            ? -1
            : result;
    };

    /**
     * Removes the mapping of the specified value key if this map contains a mapping for the key
     * @param {number} key
     * @return {void}
     */
    MyHashMap.prototype.remove = function (key) {
        delete hashMap[key];
    };

    /**
     * Your MyHashMap object will be instantiated and called as such:
     * var obj = new MyHashMap()
     * obj.put(key,value)
     * var param_2 = obj.get(key)
     * obj.remove(key)
     */
    ```

    -   시간복잡도: 196ms / faster than 81.66%
    -   공간복잡도: 49.1 MB / less than 43.02%

-   코드 (2) : ES6 Classes

    ```js
    class MyHashMap {
        hashMap = {};
        put = (key, value) => (this.hashMap[key] = value);
        get = (key) =>
            typeof this.hashMap[key] === 'undefined' ||
            typeof this.hashMap[key] === 'null'
                ? -1
                : this.hashMap[key];
        remove = (key) => delete this.hashMap[key];
    }
    ```

    -   시간복잡도: 180 ms / faster than 99.51%
    -   공간복잡도: 48.7 MB / less than 54.22%

### **참고 링크**

**강의**

-   [코딩테스트, 기초, HashTable](https://youtu.be/y-0DZ1MFN1g)
