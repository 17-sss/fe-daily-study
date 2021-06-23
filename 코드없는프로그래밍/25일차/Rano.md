## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 23일]

### **1.** Leetcode - Fibonacci Number

[문제: LeetCode - 509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

**> 메모**

-   DP를 사용해야 할 때?
    -   Problem에서 Subproblem으로 나누어질 때  
         <img src="https://user-images.githubusercontent.com/33610315/123012884-0ab94500-d3fe-11eb-967f-c878d8ce49db.png" width=500/>
-   피보나치 수열에 대한 공식  
    `F(n) = F(n - 1) + F(n - 2)`

**> 동적 프로그래밍에선 다양한 방법이 있음 (+ 코드)**

-   naive(순진..? / no DP)한 방법으로는 오래걸림 (3개의 코드 중 제일 느림)

    ```js
    const fib_naive = (n) => {
        if (n === 0) return 0;
        else if (n === 1) return 1;
        else return fib_naive(n - 1) + fib_naive(n - 2);
    };
    ```

-   Top Down 방식 (naive 보단 빠름)

    ```js
    const fib_array = [0, 1];
    const fib_recur_dp = (n) => {
        const cnrt_length = fib_array.length;
        if (n < cnrt_length) return fib_array[n];
        else {
            const fib = fib_recur_dp(n - 1) + fib_recur_dp(n - 2);
            fib_array.push(fib);
            return fib;
        }
    };
    ```

    -   n이 10000으로 들어왔을 땐 overflow..  
         이럴땐 아래의 Bottom Up 방식 사용!

-   Bottom Up 방식 (naive, Top Down 보다 빠름)

    ```js
    const fib_dp = (n) => {
        if (n === 0) return 0;
        else if (n === 1) return 1;

        const fib_array = [0, 1];
        for (let i = 2; i <= n; i++) {
            const num = fib_array[i - 1] + fib_array[i - 2];
            fib_array.push(num);
        }
        return fib_array[n];
    };
    ```

    -   n이 10000으로 들어왔을 때 overflow가 발생하지 않음
    -   naive한 방법보다 대략 1000배 빠름

**코드**

-   코드 : 통과 성공 (_위 Bottom Up 방식과 같은 구조_)

    ```js
    /**
     * @param {number} n
     * @return {number}
     */
    const fib = (n) => {
        if (n === 0) return 0;
        else if (n === 1) return 1;

        const arrFib = [0, 1];
        for (let i = 2; i <= n; i++) {
            const num = arrFib[i - 1] + arrFib[i - 2];
            arrFib.push(num);
            arrFib.shift();
        }
        return arrFib[n];
    };
    ```

### **참고 링크**

**강의**

-   [다이나믹 프로그래밍, 소개, Dynamic Programming Intro,](https://youtu.be/o-4c9xecPpM)
-   [코딩테스트, 기초, 다이나믹 프로그래밍, dynamic programming](https://youtu.be/eJC2oetXaNk)
