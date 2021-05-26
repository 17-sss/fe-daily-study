## 코드 없는 프로그래밍 3일차 (21.05.25)
### 287. Find the Duplicate Number
https://leetcode.com/problems/find-the-duplicate-number/

정렬되지 않은 배열에서 중복으로 들어간 숫자를 찾기!

1. Brute Force 방법으로 푸는 방법 = O(N^2)
- 2개의 pointer를 만들어서 하나는 처음부터, 하나는 끝부터 움직이게 한다.
- 2중 실행해서 두 포인터가 가리키는 인덱스가 '같은 숫자'일 때를 찾아내면 된다.
```js
//실패 - 시간 초과
const findDuplicate = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for(let j = nums.length - 1; j > i; j--){
            if (nums[i] === nums[j]) return nums[i];
        }
    }
}

//통과 - 그런데  내부 for문의 조건을 for (let j = i + 1; j < nums.length - 1; j++) 으로 하면 통과가 안됌. 왜...?
//7928ms
const findDuplicate = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return nums[i];
        }
    }
}

```

1. 더 빠른 방법: Sorting = N log N + N = O(N log N)
- 중복된 숫자를 찾으면 되므로 가장 먼저 배열을 sorting한다.
- 두 개의 pointer를 만들어 연속되는 자리에 배치하고 두 pointer가 같은 숫자를 가리킬 때를 찾으면 된다.

3. 더더 빠른 방법: O(N)
- 총 요소의 갯수 + 1만큼 칸(space)을 가진 배열을 만든다.
- 새로운 배열에는 loop를 돌면서 해당 숫자와 일치되는 index에 1을 넣어 체크해준다.
- 이미 1이 들어있는 숫자를 찾으면 return한다.

4. 가장 빠른 방법: O(1)
- 현재 있는 nums 배열을 돌면서 요소의 값에 해당하는 인덱스에 위치한 값을 확인한다.(인덱스 nums[0]에 1이라는 숫자가 들어있다면 nums[1]로 옮겨간다.)
- 그리고 그 위치에 들어있는 값에 '-'를 붙여 음수화한다. (nums[1]에 2가 들어있다면 -2로 만들어준 다음, nums[2]로 옮겨간다.)
- 이미 음수가 되어있는 값을 찾았을 경우 해당 숫자의 인덱스를 return 한다. 왜냐하면 해당 인덱스를 가리키는 숫자가 2개가 있다는 뜻이 되기 때문.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    for(let num of nums) {
        const i = Math.abs(num);
        if (nums[i] < 0) return i;
        nums[i] = - nums[i];
    }
};
```

-----
### 2sum, 3sum, 4sum
1. Two Sum
https://leetcode.com/problems/two-sum/

hashmap으로 풀게 될 경우, O(N)으로 해결이 가능하다.
두 숫자를 더해서 합쳐서 target과 동일한 값이 나온다면 해당 숫자들의 '인덱스'를 배열에 담아 리턴한다.

1. Brute Force 를 사용하는 방법 = O(N^2)
- 2중 for문을 돌면서 두 요소의 합이 target이 되는 경우를 찾는 것

2. 정렬된 배열 + 두 개의 인덱스를 사용하는 방법 = O(N log N) + O(N) = O(N log N)
- 미리 nums를 정렬한다.
- 처음과 끝에 각각 pivot을 놓고 sum > target인 경우, 끝에 있는 pivot을 한칸씩 왼쪽으로 옮겨서 비교한다.


```js
//기존에 풀어놓았던 방법: 2중 for문
var twoSum = function(nums, target) {
    const answer = [];
    nums.forEach((el, idx) => {
        for(let i = idx + 1; i < nums.length; i++){
            if (el + nums[i] === target){
                answer.push(idx);
                answer.push(i);
            }
        }
    })
    return answer;
};

//새로 시도한 방법 - pivot 2개를 만들어 끝 pivot을 시작 pivot쪽으로 옮겨가는 방식. 끝 pivot이 시작 pivot 바로 전까지 왔는데도 target과 일치되는 값이 없다면 시작점 pivot을 한칸씩 오른쪽으로 움직이고, 끝 pivot은 다시 초기화 시켜 맨 끝 자리로 보낸다. 이 과정 반복...
const twoSum = function(nums, target) {
    // nums = nums.sort((a, b) => a - b); <- 불필요!!
    let start = 0;
    let end = nums.length - 1;

    while(start <= nums.length - 1) {
        if (nums[start] + nums[end] === target) return [start, end];
        else if (start + 1 === end) {
            start++;
            end = nums.length - 1;
        } else {
            end--;
        }
    }
    return [];
};

```
- sort를 하면 인덱스가 달라지게 되므로 실제 값을 정확하게 찾더라도 반환하는 값이 틀려진다. 문제의 요구사항을 꼼꼼히 읽을 것!!

1.  3Sum Closest
https://leetcode.com/problems/3sum-closest/

O(N^2) + O(N log N) = O(N^2)
1. 배열을 오름차순으로 정렬한다.
2. 3개의 pointer를 만든다.
3. 각 포인터의 역할(언제 포인터를 움직여야 할까?):
- 