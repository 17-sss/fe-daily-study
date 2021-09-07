## 어려웠던 점 & 회고
- 잃어버린 학생의 순번 [좌, 우]에 있는 학생이 체육복 여벌을 가지고 있는지 체크만 하는 방식으로 풀었는데,  
    알고보니 여벌 가지고 있다가도 잃어버리는 경우도 있었습니다..  
    문제를 잘 읽어야겠습니다!

## 코드 (통과 성공)
```js
// https://programmers.co.kr/learn/courses/30/lessons/42862
// 체육복
function solution(n, lost, reserve) {
    let result = n - lost.length;

    for (let i = 0; i < lost.length; i++) {
        const currLost = lost[i];
        if (reserve.indexOf(currLost) > -1) {
            reserve = reserve.filter(
                (_, idx) => reserve.indexOf(currLost) !== idx,
            );
            lost = lost.filter((_, idx) => i !== idx);
            result++;
            i--;
        }
    }

    for (let i = 0; i < lost.length; i++) {
        const lostStudent = lost[i];
        const arrRange = [lostStudent - 1, lostStudent + 1];

        for (let j = 0; j < arrRange.length; j++) {
            const nReserveOK = reserve.indexOf(arrRange[j]);
            if (nReserveOK > -1) {
                reserve = reserve.filter((_, idx) => idx !== nReserveOK);
                result++;
                break;
            }
        }
    }

    return result;
}

solution(5, [2, 4], [1, 3, 5]); // 5
solution(5, [2, 4], [3]); // 4
solution(3, [3], 1); // 2
solution(3, [1, 2], [2, 3]); // 2
```