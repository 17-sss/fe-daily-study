## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 17일]

### **1.** Leetcode - Insert Delete GetRandom O(1)

[문제: LeetCode - 380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)

-   _O(1)_ 의 시간복잡도를 가지는 `insert()`, `remove()`, `getRandom()` 가진 set을 디자인하는 문제
-   **hashMap**과 **Array**를 활용하여 풀이

**코드**

-   코드 : 통과 성공 (Prototype)

    ```js
    /**
     * Initialize your data structure here.
     */
    var RandomizedSet = function () {
        this.map = new Map();
        this.array = [];
    };

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element.
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.insert = function (val) {
        if (this.map.has(val)) return false;

        this.map.set(val, this.map.size); // map.size는 초기값 0
        this.array.push(val);
        return true;
    };

    /**
     * Removes a value from the set. Returns true if the set contained the specified element.
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.remove = function (val) {
        // 1. 지우려는 값이 있는지 체크 (지울 idx를 반환)
        const currRemoveIdx = this.map.get(val);
        if (
            typeof currRemoveIdx === 'undefined' ||
            typeof currRemoveIdx === 'null'
        )
            return false;

        // 2. 현재 지우려는 idx 위치(currRemoveIdx)에 있는 값이 array의 마지막 아이템이 아닐경우
        const arrLastIdx = this.array.length - 1;
        if (currRemoveIdx !== arrLastIdx) {
            const arrLastItem = this.array[arrLastIdx];

            // array[currRemoveIdx]에 arrLastItem를 대입 (array의 마지막 아이템의 위치를 currRemoveIdx로 옮기는 것!)
            this.array[currRemoveIdx] = arrLastItem;
            this.map.set(arrLastItem, currRemoveIdx); // map의 value에 들어가있던 idx 위치도 업데이트!
        }

        this.map.delete(val);
        this.array.pop();

        return true;
    };

    /**
     * Get a random element from the set.
     * @return {number}
     */
    RandomizedSet.prototype.getRandom = function () {
        const randomIdx = Math.floor(Math.random() * this.array.length);
        return this.array[randomIdx];
    };

    /**
     * Your RandomizedSet object will be instantiated and called as such:
     * var obj = new RandomizedSet()
     * var param_1 = obj.insert(val)
     * var param_2 = obj.remove(val)
     * var param_3 = obj.getRandom()
     */
    ```

-   코드 : 통과 성공 (ES6 Classes)

    ```js
    class RandomizedSet {
        constructor() {
            this.map = new Map();
            this.array = [];
        }

        insert = (val) => {
            if (this.map.has(val)) return false;

            this.map.set(val, this.map.size); // map.size는 초기값 0
            this.array.push(val);
            return true;
        };

        remove = (val) => {
            const currRemoveIdx = this.map.get(val);
            if (
                typeof currRemoveIdx === 'undefined' ||
                typeof currRemoveIdx === 'null'
            )
                return false;

            const arrLastIdx = this.array.length - 1;
            if (currRemoveIdx !== arrLastIdx) {
                const arrLastItem = this.array[arrLastIdx];

                this.array[currRemoveIdx] = arrLastItem;
                this.map.set(arrLastItem, currRemoveIdx);
            }

            this.map.delete(val);
            this.array.pop();

            return true;
        };

        getRandom = () =>
            this.array[Math.floor(Math.random() * this.array.length)];
    }
    ```

-   실행

    ```js
    // 실행
    const rm = new RandomizedSet();
    rm.insert(0);
    rm.insert(1);
    rm.remove(0);
    rm.insert(2);
    rm.remove(1);
    rm.getRandom();
    ```

### **참고 링크**

**강의**

-   [코딩 테스트, 중급, Random HashSet](https://youtu.be/MtqOsklw6yk)
