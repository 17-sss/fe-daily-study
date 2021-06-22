## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 06월 22일]

### **1.** Leetcode - Minimum Area Rectangle

[문제: LeetCode - 939. Minimum Area Rectangle](https://leetcode.com/problems/minimum-area-rectangle/)

**> 문제 요약**

-   주어진 point들로 만들수 있는 직사각형중 최소 size는 몇인지 구하는 문제!

**> 시나리오 메모 및 해결법**

`[[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1]]`와 같은 좌표 값(`points`)들이 주어졌을 때  
`[1, 1], [2, 3]`의 값과 쌍이 되는 두 좌표 값은 `[1, 3], [2, 1],`.

-   이 쌍이 되는 두 좌표를 찾을 때

    -   `[1, 3]`을 찾을 때에는  
         첫번째 포인터 `[1, 1]`의 _x_ 값 1이 x값으로 들어오고  
         두번째 포인터 `[2, 3]`의 _y_ 값 3이 y값으로 들어옴
    -   `[2, 1]`을 찾을 때에는  
         두번째 포인터 `[2, 3]`의 _x_ 값 2가 x값으로 들어오고  
         첫번째 포인터 `[1, 1]`의 _y_ 값 1이 y값으로 들어옴

-   배열 순회
    -   배열을 순회하여 찾으려면 _O(n³)_ 의 시간복잡도를 가짐
        -   이중 배열 _O(n²)_  
            쌍이 되는 두 좌표 값 찾으려면 for문 한번 더 _O(n)_  
            라서 _O(n³)_ 의 시간복잡도을 가지는걸까..?
-   HashMap of HashSet
    -   Points 배열의 좌표 값들을 Map에 넣기
        -   좌표의 `x` 값은 **Map**의 `key` 값으로
        -   좌표의 `y` 값들은 **Map**의 `value` 값으로  
            _단_, `y` 값들은 **Map**의 `value`에 들어갈 때 HashSet으로 넣기!
            -   참고 이미지  
                <img src="https://user-images.githubusercontent.com/33610315/122920726-a7e39180-d39c-11eb-919f-c0a72b221e17.png" width=200/>
    -   좌표 정보들을 가지고 있는 points 배열은 이중 배열.  
        `points` 배열 기준으로 이중 for문으로 순회하며 포인터들을 구하고 사각형의 사이즈를 계산.  
        더 작은 값이 나오면 Update!
        -   사각형 사이즈 구할 때 참고 이미지  
            <img src="https://user-images.githubusercontent.com/33610315/122935254-28a98a00-d3ab-11eb-93e7-d4d9ffea9d9e.png" width=600/>

**> 기타 메모**

-   이런 문제가 주어졌을 때 `Sorting`, `2 Pointer`, `DP (동적 프로그래밍)`등의 방법도 생각해보기!

**코드**

-   코드 : 통과 성공 (조금 참고함 / 어려움...😭)

    ```js
    /**
     * @param {number[][]} points
     * @return {number}
     */
    const minAreaRect = (points) => {
        if (!points || points.length <= 0) return 0;
        const map = new Map();
        let result = Number.MAX_VALUE; // result는 Math.min을 계속 거쳐야함.. 그러니까 제일 큰 숫자로!

        // 1. HashMap에 x값은 key로, 계속해서 나오는 y 값들은 value에 넣되, HashSet으로
        for (let i = 0; i < points.length; i++) {
            const [x, y] = points[i];

            let valuesSet;
            if (!map.has(x)) valuesSet = new Set().add(y);
            else valuesSet = map.get(x).add(y);
            map.set(x, valuesSet);
        }

        // 2. Points 배열 순회 (이중 for 문)
        // Map에서 Point 3 & Point 4의 좌표 값 존재 여부 확인 후 Size 비교
        for (let i = 0; i < points.length; i++) {
            const [x1, y1] = points[i]; // Point 1

            for (let j = i + 1; j < points.length; j++) {
                const [x2, y2] = points[j]; // Point 2

                const [x3, y3] = [x1, y2]; // Point 3
                const [x4, y4] = [x2, y1]; // Point 4

                const currSize = Math.abs(x3 - x4) * Math.abs(y4 - y3); // 현재 좌표들을 조합한 사각형의 Size
                if (currSize === 0) continue; // 0 이라면 update되면 안대!

                // Point 3 & Point 4의 좌표 값 존재 여부 확인. 만약 없다면 continue
                pt3Set = map.get(x3);
                if (!pt3Set.has(y3)) continue;

                pt4Set = map.get(x4);
                if (!pt4Set.has(y4)) continue;
                // --

                result = Math.min(result, currSize);
            }
        }

        return result === Number.MAX_VALUE ? 0 : result;
    };
    ```

    -   시간복잡도: _O(n²)_
        -   284 ms / faster than 81.89%
    -   공간복잡도: _O(n)_
        -   43.8 MB / less than 91.34%

### **참고 링크**

**강의**

-   [코딩테스트, 중급, Min Area Rectangle](https://youtu.be/xvuuENPhEH4)
