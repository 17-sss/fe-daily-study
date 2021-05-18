## 코드
```js
const pivotIndex = (nums) => {
    const sum = nums.reduce((init, value) => init += value, 0);

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

### **참고 링크**
- [문제: LeetCode - 724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)