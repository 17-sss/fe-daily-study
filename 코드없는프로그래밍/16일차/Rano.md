## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 10일]

### **1.** Leetcode - Daily Temperatures

[문제: LeetCode - 739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

**강의보면서 시나리오 및 메모**

-   공통

    -   이 문제는 생각의 전환을 할 수 있는 좋은 문제
    -   현재 Index의 우측에 더 큰 값이 존재하지 않다면 0.
    -   반환될 `result` 배열의 길이는 `temperatures`의 길이만큼.
    -   아래 Brute Force 실습 시 우측으로 순차적 순회가 아닌 좌측으로 (맨 끝부터) 순회하는 게 낫다는 판단이 나옴

-   Brute Force (무차별 대입) / (순회방향 **_left -> right_**)

    -   `result` 배열에 거리값 `push()` 시 순회방향에 따라 **_left -> right_** 순으로 저장
    -   포인터 2개 사용 (이중 반복문 / 시간복잡도: O(n²) )
    -   매개변수 `temperatures` 숫자 배열을 우측으로 순회
        -   _포인터 1_ 은 숫자 하나를 기준으로 하고  
             _포인터 2_ 는 _포인터 1_ 의 값이 바뀔 때마다 _포인터 1_ 의 값 기준으로  
             전부 순회
        -   순회하면서 _포인터 1_ 의 값보다 _포인터 2_ 의 값이 더 크게 되면,  
            거리값 계산 **(** _포인터 2_ 의 index `-` _포인터 1_ 의 index **)**  
            계산된 값을 `result` 배열에 `push()` 후 _포인터 2_ 는 `break;`

-   Stack / (순회방향 : 역순 **_right -> left_**)
    > **_열심히 쓰긴 했는데 코드로 풀어보니 아닌 것 같음.._**  
    > **아래 코드의 주석 참고!!** 이 글은 조금만 참고해줘요!!
    -   `result` 배열에 거리값 `push()` 시 순회방향에 따라 **_right -> left_** 순으로 저장
        -   여기선 result 배열에 `push()`가 아닌 `unshift()` 느낌!!
    -   포인터 1개 사용 ( 시간복잡도: O(n) )
    -   매개변수 `temperatures` 숫자 배열을 맨 끝부터 좌측으로 순회
    -   Stack에 `push()` 할 때에는 [num, idx]를 `push()`
        -   num는 `temperatures`에서 포인터의 위치의 값
        -   idx는 `temperatures`에서 포인터의 위치
    -   Stack에서 `pop()`을 할 경우는 현재 _포인터_ 의 값이 Stack의 `top` 값보다 더 클 경우에 `pop()`
        -   이 조건이 부합할 경우 계속해서 `pop()` 해주다가  
             현재 _포인터_ 의 값보다 Stack의 `top` 값이 크게되면  
             거리값 계산 **(** Stack의 `top`의 index `-` _포인터_ 의 index **)**  
             계산된 값을 `result` 배열에 `unshift()`!

**코드**

-   코드 (Stack) : 통과 성공

    ```js
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    const dailyTemperatures = (temperatures) => {
        const stack = [];
        const nMax = temperatures.length;
        let nIdx = nMax - 1;

        // result 배열의 길이는 temperatures.length 만큼 -1로 채워줌
        // nIdx(피벗)이 역순으로 순회하기에.
        const result = Array(nMax).fill(-1);

        while (nIdx >= 0) {
            const num = temperatures[nIdx];

            // 맨 처음엔 없으니까 stack에 push
            if (nMax - 1 === nIdx) {
                result[nIdx] = 0;
                stack.push([num, nIdx]);
                nIdx--;
                continue;
            }

            // stack의 top 값들을 가져오기 위한 변수 선언
            let topNum, topIdx;
            while (stack.length) {
                [topNum, topIdx] = stack[stack.length - 1];

                // 가져온 topNum이 현재 피벗이 가르키는 num이 더 크거나 같다면 pop()
                if (topNum <= num) stack.pop();
                else break; // 가져온 topNum이 num보다 크다면 이 반복문 break;
            }
            // result[nIdx]에
                // stack.length가 0일 경우 0을 넣음
                // 아니라면 위에서 계산한 top의 idx에서 현재 피벗의 idx를 빼주면
                    // 오른쪽에 있는 큰 값과의 거리 값이 됨!
            result[nIdx] = !stack.length ? 0 : topIdx - nIdx;
            stack.push([num, nIdx]);
            nIdx--;
        }
        return result;
    };

    dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]); // [8,1,5,4,3,2,1,1,0,0]
    ```

---

### **참고 링크**

**강의**

-   [코딩테스트, 중급, Distance To greater Number (daily temperature)](https://youtu.be/e3UUU018sZE)
