## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 05월 18일]

### **1.** 인터뷰 배열 기초

-   **Array 문제의 기본이 되는 건 Sorting**
-   heap, quick, merge이 있지만 우리가 풀어야 할 건 인터뷰 문제들
    -   stable한 sort는 merge
        -   idx로 sort 하더라도 한글이나 영어의 value는 순서가 보장
    -   unstable한 sort는 quick, heap
        -   idx로 sort 하더라도 한글이나 영어의 value는 순서가 보장되지 않음
-   sorting은 기본적으로 _O(n logN)_
-   search는 _O(n)_
-   binary search는 _O(logN)_

### **2.** quick sort

-   quick sort는 pivot & partitioning  
     <img src="https://user-images.githubusercontent.com/33610315/118568519-f8226f00-b7b2-11eb-8513-25d6223d33df.png" width="400" />
-   quick sort..?
    -   최소: _O(logN)_
    -   최대: _O(n)_

-   quick sort 예시코드 (feat. 제쓴)
    ```js
    const swap = (nums = [], left, right) => {
        const tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
    };
    const partition = (nums = [], left, right) => {
        let i = left;
        let j = right;
        let pivot = nums[left];
        while (i < j) {
            while (nums[j] > pivot) j--;
            while (i < j && nums[i] <= pivot) i++;
            swap(nums, i, j);
        }
        nums[left] = nums[j];
        nums[j] = pivot;
        return j;
    };
    const quickSort = (nums = [], left, right) => {
        if (left < right) {
            const pivot = partition(nums, left, right);
            quickSort(nums, left, pivot - 1);
            quickSort(nums, pivot + 1, right);
        }
        return nums;
    };
    const nums = [3, 5, 7, 1, 2, 9, 8, 15, 10, 4, 6];
    quickSort(nums, 0, nums.length - 1);
    console.log(nums);
    ```

### **3.** Leetcode - Binary Search

[문제: LeetCode - 704. Binary Search](https://leetcode.com/problems/binary-search/)

-   **_퀵 정렬_**
-   이 문제는 target의 index를 찾는 문제지만, 퀵 정렬이 빠름!

**1) 코드 (강의를 본 후)**

-   한 줄 코드 (quick sort 사용안함)
    ```js
    const search = (nums, target) => nums.indexOf(target);
    ```
-   quick sort

    ```js
    const search = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let pivot = Math.floor((left + right) / 2);

            if (nums[pivot] === target) return pivot;
            else if (nums[pivot] > target) right -= 1;
            else left += 1;
        }

        return -1;
    };
    ```

### **4.** Leetcode - Move Zeroes

[문제: LeetCode - 283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

-   **_투 포인터_**
-   이 문제는 받아오는 nums를 직접적으로 변경해야 함!

**1) 코드 (강의 보기 전)**

-   오답 (1)

    -   `[0, 1, 0, 3, 12]` 처리 불가

    ```js
    const moveZeroes = (nums) => {
        let nLoopCnt = 0;
        while (nLoopCnt < nums.length) {
            const currValue = nums.shift();
            if (currValue === 0) nums.push(currValue);
            else nums.unshift(currValue);
            nLoopCnt++;
        }

        return nums;
    };
    ```

-   오답 (2)
    -   `[0, 0, 1]` 처리 불가
    ```js
    const moveZeroes = (nums) => {
        let idx = 0;
        while (true) {
            if (nums[idx] === 0) {
                nums.splice(idx, 1);
                nums.push(0);
            }
            if (nums.length - 1 === idx) break;
            idx++;
        }
        return nums;
    };
    ```

**2) 코드 (강의를 본 후)**

-   일단 `startIdx`(최소 기준점, 배열의 첫번째. 즉 0번째 부터 시작)를 정의해주고  
     계속 체크해가며 for Loop를 돌고, 배열 내의 값을 swap해주며 `startIdx` 업뎃 해줘야 할 듯!

-   코드 (1)

    ```js
    const moveZeroes = (nums) => {
        let startIdx = 0;

        for (let idx = 0; idx < nums.length; idx++) {
            if (nums[idx] !== 0) {
                if (nums[idx] === nums[startIdx]) {
                    startIdx++;
                    continue;
                }
                const value = nums[idx];
                nums[startIdx] = value;
                nums[idx] = 0;

                startIdx++;
            }
        }
    };

    moveZeroes([0, 1, 0, 3, 12]);
    ```

    -   디버깅 끄적끄적

        ```js
        /*
            nums.length = 5;
        
            - [PASS] [0, 1, 0, 3, 12]
                ▷ idx: 0  startIdx: 0
        
            - [CHANGE] [0, 1, 0, 3, 12]
                ▷ idx: 1  startIdx: 0
                ▷ nums[idx (1)]: 1  < SWAP >  nums[startIdx (0)]: 0
                        --> nums[startIdx(0)]: 1
                        --> nums[idx(1)]: 0
                        --> startIdx: 1
                    --> [1, 0, 0, 3, 12]
        
            - [PASS] [1, 0, 0, 3, 12]
                ▷ idx: 2  startIdx: 1
        
            - [CHANGE] [1, 0, 0, 3, 12]
                ▷ idx: 3  startIdx: 1
                ▷ nums[idx (3)]: 3  < SWAP >  nums[startIdx (1)]: 0
                        --> nums[startIdx(1)]: 3
                        -> nums[idx(3)]: 0
                        --> startIdx: 2
                    --> [1, 3, 0, 0, 12]
        
            - [CHANGE] [1, 3, 0, 0, 12]
                ▷ idx: 4  startIdx: 2
                ▷ nums[idx (4)]: 12  < SWAP >  nums[startIdx (2)]: 0
                        --> nums[startIdx(2)]: 12
                        --> nums[idx(4)]: 0
                        --> startIdx: 3
                    --> [1, 3, 12, 0, 0]
        */
        ```

### **5.** Leetcode - Find Pivot Index

[문제: LeetCode - 724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)  
[문제: LeetCode - 209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) (추가 문제 / 안품)

-   **_슬라이딩 윈도우_**: 2개의 포인터가 일정한 너비로 움직임.
-   흠.. 타임 컴플렉시티?? (_Time Complexity_)
    -   시간복잡도 말하는거네... 하
-   이 강의에서 나오는 `Sliding` 알고리즘은 _O(n)_
    -   배열의 모든 값이 양수일 경우에만 가능!!

**1) 코드 (강의를 본 후)**

-   코드 (1)

    ```js
    const pivotIndex = (nums) => {
        const sum = nums.reduce((init, value) => (init += value), 0);

        let leftSum = 0;
        let rightSum = sum;
        let tmpValue = 0;

        for (let idx = 0; idx < nums.length; idx++) {
            const currValue = nums[idx];

            leftSum += tmpValue;
            rightSum -= currValue;

            if (leftSum === rightSum) return idx;
            tmpValue = currValue;
        }
        return -1;
    };
    ```

### **+** 기타 메모
- 공부 할 것: `quickSort`, `슬라이딩 윈도우`, `투 포인터`, `Brute force (BF)`
    - Brute force(BF): 노가다?

---

### **참고 링크**

**강의**

-   [인터뷰 배열 기초](https://youtu.be/tLG10WsVntI)
-   [코딩 테스트, 기초, 퀵 정렬. quick sort. 퀵 소트](https://youtu.be/H7CNZujkk0k)
-   [코딩 테스트, 기초, 배열 인터뷰 바이너리 서치](https://youtu.be/Ix-7qWQr_RE)
-   [코딩 테스트, 초급, moveZeros](https://youtu.be/9_PnAyVVl8M)
-   [코딩 테스트, 초급, find pivot index](https://youtu.be/6gQm5De94aU)

**기타**

-   [시간복잡도와 공간복잡도(Time Complexity Space Complexity)](https://madplay.github.io/post/time-complexity-space-complexity)
