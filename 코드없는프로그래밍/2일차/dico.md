### 75. Sort Colors (Dutch Flag Problem)
https://leetcode.com/problems/sort-colors/


첫번째 방법(Counting Method): 각 요소의 종류마다 갯수를 세고, 그에 맞는 새로운 배열을 생성해 반환한다.
```js
const sortColors = function(nums) {
    let temp = {
        "z": 0,
        "o": 0,
        "t": 0
    }

    nums.forEach(num => {
        if (num === 0) {
            temp["z"]++;
        } else if (num === 1) {
            temp["o"]++;
        } else {
            temp["t"]++;
        }
    })

    nums = [...Array(temp["z"]).fill(0), ...Array(temp["o"]).fill(1), ...Array(temp["t"]).fill(2)];
};

const sortColors = function(nums) {
    let temp = {
        "z": 0,
        "o": 0,
        "t": 0
    }

    nums.forEach(num => {
        if (num === 0) {
            temp["z"]++;
        } else if (num === 1) {
            temp["o"]++;
        } else {
            temp["t"]++;
        }
    });

    for(let i = 0; i < nums.length; i++) {
        nums[i] = temp.z && temp.z-- ? 0
        : temp.o && temp.o-- ? 1 : 2;
    }
    //for문 + 3항 연산자로 아래 재할당 로직을 대체함. 문제 특성상 nums를 직접 변경해야 한다.
    // nums = [...Array(temp["z"]).fill(0), ...Array(temp["o"]).fill(1), ...Array(temp["t"]).fill(2)];
};

```
문제에서 주석으로 주어지는 힌트를 꼭 읽어볼 것!

두번째 방법(<Quick Sort> In-place Swap):
- pointer을 3개 정하고 가장 작거나 큰 숫자를 만날때마다 2개의 pivot을 swap 해준다.
- 기준이 되는 pointer가 1을 만나면 한 칸 옆으로 가고, 0을 만나면 시작점의 pointer와 스왑, 2를 만나면 종료지점의 pointer와 스왑. (시작점의 pointer 왼쪽으로는 가장 작은 숫자만, 종료지점의 pointer 오른쪽으로는 가장 큰 숫자만 존재해야한다.)
- 그리고 스왑이 시작점과 종료지점의 pointer들은 스왑이후 한 칸씩 안쪽으로 움직인다.
- 주의할 점: 종료지점의 pointer와 스왑하는 경우 기준이 되는 pointer는 움직이지 않고 스왑된 요소를 체크한다!!
- 종료지점의 pointer와 움직이는 pointer가 역전이 되면 정렬을 마무리한다.
```js
const sortColors = function(nums) {
    let idx0 = 0;
    let i = 0;
    let idx2 = nums.length - 1;

    while (i <= idx2) {
        if (nums[i] === 0) {
            const t = nums[idx0]; //임시저장
            nums[idx0] = nums[i];
            nums[i] = t;
            idx0++;
            i++;
        } else if (nums[i] === 2) {
            const l = nums[i];   //임시저장
            nums[i] = nums[idx2];
            nums[idx2] = l;
            idx2--;
        } else {
            i++;
        }
    }
};
```

--------------
### 88. Merge Sorted Array
https://leetcode.com/problems/merge-sorted-array/

nums1 배열에 두 배열의 요소들을 전부 정렬해서 넣는 문제.
- 일반적으로 두 배열을 하나의 정렬된 배열로 만드는 것은 인덱스를 기준으로 비교해서 작은 숫자를 차례대로 새 배열에 넣어주면 된다.
- 하지만 이 경우, nums1에 모든 요소들을 넣어야 하기때문에 nums1에서 0이 아닌 모든 요소들을 배열 뒷쪽으로 밀어준다.
- 혹은 pointer를 3개를 만든다(이 방법으로 진행!) = O(N+M).
1. nums1에서 0이 아닌 숫자가 존재하는 가장 끝 인덱스에 pointer1을 둔다. 그리고 nums1의 가장 마지막 인덱스에 pointer3을 둔다.
2. nums2의 가장 끝 인덱스에 pointer2를 둔다.
3. pointer1과 pointer2를 비교해서 더 큰 숫자를 pointer3이 가리키는 곳으로 옮긴다.
```js
const merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p3 = nums1.length - 1;

    if(p2 < 0) return;
    while(0 <= p1 && 0 <= p2) {
        const num1 = nums1[p1];
        const num2 = nums2[p2];
        if(num2 <= num1) {
            let num = num1; //더 큰 숫자가 num이 된다.
            nums1[p3] = num;
            p1--;
            p3--;
        } else {
            let num = num2;
            nums1[p3] = num;
            p2--;
            p3--;
        }
    }
    while (0 <= p2) {    //배열 통째로 복사하는 것도 가능.
        nums1[p3] = nums2[p2];
        p2--;
        p3--;
    }
};
```
----------
### 162. Find Peak Element
https://leetcode.com/problems/find-peak-element/

- Peak의 인덱스를 반환하는 문제.
- 여기서 "peak"란, 양 옆의 숫자보다 가운데에 위치한 숫자가 클 때 해당 숫자를 peak라고 한다.
- 순회를 하면서 주변 숫자와 비교하는 방법은 O(N),
이보다 더 빠른 방법은 binary search = O(log N).
- 배열을 반으로 나누고 가운데에 해당하는 숫자를 pivot으로 정한다.
- pivot의 바로 다음 숫자를 nextNum으로 지정해서 nums[pivot]과 크기를 비교한다.
1) nextNum > num 일 때:
left를 pivot + 1
2) nextNum < num 일 때:
right = pivot;

- left와 right의 간격을 점점 좁히고, 둘이 만나는 지점에 반복문을 탈출한다.
- left와 right는 같은 곳을 가리키고 있기 때문에 left와 right 중 아무거나 return하면 된다.
```js
const findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    if (nums.length <= 1) return 0;

    while(left < right){
        const pivot = Math.floor((left + right) / 2);
        const num = nums[pivot];
        const nextNum = nums[pivot + 1]; //pivot 다음 인덱스에 해당하는 숫자

        if(num < nextNum) {
            left = pivot + 1;
        } else {
            right = pivot;
        }
    }
    return left;
}
```
팀원들이랑 그림을 그려가면서 한 스텝씩 나아가보니 이해가 되었다. :)
이해가 어려웠던 부분들은 같이 얘기해보는 것이 학습에 효과적이라는 생각이 든다.