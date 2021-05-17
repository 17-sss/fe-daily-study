## 어려웠던 점 & 회고
- 예전에 풀었던 것과 다르게 풀어봤는데, 속도는 거의 비슷..

## 코드 (통과 성공)
```js
// https://programmers.co.kr/learn/courses/30/lessons/12982
// Summer/Winter Coding(~2018) - 예산

const solution = (d, budget) =>
    Math.max(   // 3. 아래에서 계산한 배열에서 제일 큰 값을 최종 결과 값으로.
        ...d
            // 1. 먼저 배열 d를 sort!
            .sort((a, b) => a - b) 
            // 2. 배열을 순회하며 cnt 계산
            .reduce((resultArr, value1, idx, thisArr) => {
                // 1) 일단 현재 들어오는 값이 예산보다 크다면, cnt는 0.
                //    0을 resultArr에 push 후 return
                if (value1 > budget) {
                    resultArr.push(0);
                    return resultArr;
                }

                // 2) 위 과정을 통과했다면 무조건 cnt는 1
                //    아래 for문에서 요청한 금액들을 하나하나 합쳐서 계산하기 위해 
                //    currValue 선언 (초기 값은 value1)
                let cnt = 1;
                let currValue = value1;
                let len = thisArr.length;

                // 3) value2의 첫 값은 무조건 value1이 있는 idx보다 +1의 값
                for (let i = idx + 1; i < len; i++) {
                    const value2 = thisArr[i];

                    // 만약 currValue랑 현재 thisArr[i] 합쳤을 때, 예산보다 크면 continue
                    if (currValue + value2 > budget) continue;

                    // 아니라면 currValue 업뎃 후, cnt++
                    currValue += value2;
                    cnt++;
                }

                // 4) 위에서 계산한 cnt를 resultArr에 push
                resultArr.push(cnt);
                return resultArr;
            }, []),
    );
```