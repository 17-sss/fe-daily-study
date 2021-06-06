## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 04일]

### **1.** Leetcode - Min Stack

[문제: LeetCode - 155. Min Stack](https://leetcode.com/problems/min-stack/)

**코드**

-   코드 (1) : 통과 성공

    ```js
    class MinStack {
        constructor() {
            this.stack = [];
        }
        push = (val) => this.stack.push(val);
        pop = () => this.stack.pop();
        top = () => this.stack[this.stack.length - 1];
        getMin = () => Math.min(...this.stack);
    }
    ```

-   코드 (2) : 통과 성공

    ```js
    class MinStack {
        constructor() {
            this.stack = [];
            this.minStack = [];
        }
        push = (val) => {
            const min = this.getMin();
            this.stack.push(val);
            !this.minStack.length || min > val
                ? this.minStack.push(val)
                : this.minStack.push(min);
        };
        pop = () => {
            this.minStack.pop();
            return this.stack.pop();
        };
        top = () => this.stack[this.stack.length - 1];
        getMin = () => this.minStack[this.minStack.length - 1] || 0;
    }
    ```

---

### **참고 링크**

**강의**

-   [코딩테스트, 초급, Min/Max Stack](https://youtu.be/gKTi-gbyjXk)
