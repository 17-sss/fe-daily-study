560. Subarray Sum Equals K <br>
https://leetcode.com/problems/subarray-sum-equals-k/

- two sum, three sum, N sum 문제와 유사
- subarray 중 합이 k와 같은 subarray를 반환하는 문제
- 만약 원본 배열에 **양수**만 있다면 **Sliding window** 방법을 떠올려야 한다. => O(N)
- 만약 **음수**도 있다면 sliding window는 사용할 수가 없다.
- two sum 문제 때 hash map을 만들어 풀었던 방법을 응용한다.
- 2개의 **⭐️Cumulative Sum⭐️**을 이용해서 푼다. Cumulative Sum으로만 이루어진 배열을 하나 만들고, 해당 배열의 요소들끼리 차이가 k와 같다면 원본 배열에서 인덱스를 기준으로 시작점과 끝점을 찾을 수 있다.
```js
//original
[6, 3, 2, 5, 3, -3]
//cumulative sum
[6, 9, 11, 16, 19, 16]
```
- 배열의 요소들끼리의 차이가 k와 같은 쌍을 찾는 로직은 hashmap을 이용할 수 있다.
hashmap은 cumulative sum 의 요소들을 key로, value는 인덱스로 넣어준다. 이때 중복된 key가 들어온다면 value를 **배열**로 만들 수 있다.
- Brute Force 방법을 사용한다면 O(N^3)이 된다.

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
    
};
```


----