# Hashmap #4 (보류)
코딩 테스트, 중급, Top K frequent element <br>
https://leetcode.com/problems/top-k-frequent-words/

시간복잡도: O(N) + O(N log N) = O(N log N)
공간복잡도: O(N)

- 가장 많이 반복된 문자 k개 반환하기
- 마지막에 반환하기 전 가장 많이 반복된 순서대로 sorting도 해야한다.
- frequency를 계산해주는 hashmap을 만든다.

```js
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
    const hash = new Map();
};

```


------

347. Top K Frequent Elements <br>
https://leetcode.com/problems/top-k-frequent-elements/

- 상단의 문제와 동일한 방식으로 풀되, sorting 조건이 없음!

```js
const topKFrequent = function(nums, k) {
    const hash = new Map();
    const arr = [];

    for(let i = 0; i < nums.length; i++) {
      hash.has(nums[i]) ? hash.set(nums[i], hash.get(nums[i]) + 1) : hash.set(nums[i], 1);
    }

    const set = [...hash.entries()];//[["1", 1], ["2", 1]]

    set.sort((left, right) => right[1] - left[1]);

    for(let i = 0; i < k; i++) {
        arr.push(set[i][0]);
    }
    return arr.splice(0, k);
};

```

- `sort()`는 유니코드를 기준으로 비교를 한다.
