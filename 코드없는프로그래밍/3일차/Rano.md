## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 05월 21일]

### **1.** Leetcode - Merge Intervals

[문제: LeetCode - 56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)

**코드**

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    const arrResult = [];
    if (intervals.length === 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);

    let tmp = intervals[0]; // tmp는 intervals의 0번째 아이템
    let idx = 1; // tmp는 intervals의 0번째의 값이니 비교할 값은 1번째부터 시작하길
    let maxIdx = intervals.length - 1;

    while (idx <= maxIdx) {
        const curr = intervals[idx];

        const tmpEnd = tmp[1];
        const currStart = curr[0];

        if (tmpEnd >= currStart) {
            if (curr[1] > tmp[1]) tmp[1] = curr[1];
            if (idx === maxIdx) arrResult.push(tmp);
        } else {
            arrResult.push(tmp);
            tmp = curr;
            if (idx === maxIdx) arrResult.push(tmp);
        }

        idx++;
    }

    return arrResult;
};
```

-   처음에는 모든 값을 순차적으로 비교하면서 이중 while문을 쓰려했으나, 뭔가 복잡한 것 같았습니다.  
     계속 같은 생각에 빠져서 다른 방법을 찾지 못하고 머무르는 상황이..
-   어제 보았던 풀이가 생각나서 기존의 배열`intervals`을 기준으로 배열을 수정하며 풀이해봤는데 괜찮은 방법이었던 것 같고,  
     생각의 전환이 필요하다고 느낀 문제..

### **2.** Leetcode - Shortest Unsorted Continuous Subarray

[문제: LeetCode - 581. Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)

**코드**

-   무식하게(?) 풀기

    ```js
    /**
    * @param {number[]} nums
    * @return {number}
    */
    const findUnsortedSubarray = (nums) => {
        const originNums = nums.slice();
        nums.sort((a, b) => a - b);

        if (originNums.every((v, i) => v === nums[i])) return 0;

        let startIdx, endIdx;
        const numsLength = nums.length - 1;
        let pivot = 0;

        while (isNaN(startIdx) || isNaN(endIdx)) {
            if (isNaN(startIdx)) {
                if (nums[pivot] !== originNums[pivot]) {
                    startIdx = pivot;
                    pivot = numsLength;
                } else pivot++;
            } else if (isNaN(endIdx)) {
                if (nums[pivot] !== originNums[pivot]) endIdx = pivot;
                else pivot--;
            }
        }
        const result = endIdx - startIdx;
        return result ? result + 1 : 0;
    };
    ```
    - 너무 너무 느려요..  
        다른 방법이 있을 것 같은데, 그래프 그리다가 복잡해져서 그냥 보이는대로 풀이했어요!  
        더 시도해보고 바꿔보든지 해야겠습니다.

### **+** 회고

-   오프라인을 나가는 날에는 미리 전날에 풀든지 해야겠습니다..  
    죄송합니다. 당일에 못풀어서 풀이만 보고 민폐만 끼친 것 같네요..

---

### **참고 링크**

**강의**

-   [코딩 테스트,초급, Merge Intervals](https://youtu.be/S9eQ6DIBPqg)
-   [코딩테스트,중급, Shortest Unsorted Continuous Subarray](https://youtu.be/BmLLbuumuww)
