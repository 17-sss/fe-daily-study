## 어려웠던 점
- 큐 구조를 사용할까 스택구조를 사용할까하는 어려움이 있었습니다.
- 컨디션 난조로 인해 조금 참고하여 풀었습니다. (나중에 다시 풀 생각입니다)
- **상태**: 통과했으나 자신의 힘으로 온전히 푼 게 아님!!!!
    - 어렵네요... 오랜만에 보니까 레벨1도 다시 풀어봐야겠습니다.
    - 추후 다른 코드로 풀어서 이 곳에 다시 올리겠습니다 :)

## 코드
```js
// https://programmers.co.kr/learn/courses/30/lessons/42583
// 다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
    let result = 0,
        nCurrWeight = 0;
    let nTruck = truck_weights.shift();

    const queue = [];
    for (let i = 0; i < bridge_length; i++) queue.push(0);

    queue.unshift(nTruck);
    nCurrWeight += nTruck;
    queue.pop();
    result++;

    while (nCurrWeight !== 0) {
        nCurrWeight -= queue.pop();
        nTruck = truck_weights.shift();

        // 다리의 용량에 초과하지 않는다면 (안전한지 체크)
        const bCheckWeight = nTruck + nCurrWeight <= weight;

        if (bCheckWeight) {
            queue.unshift(nTruck);
            nCurrWeight += nTruck;
        } else {
            queue.unshift(0);
            truck_weights.unshift(nTruck);
        }

        result++;
    }

    return result;
}
```
