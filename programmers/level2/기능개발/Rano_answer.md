## 어려웠던 점
- 한 항목당 배포하는데 몇 일이 걸리는지 계산하는데에는 어려움이 없었으나,  
    배포 시 걸리는 일 수를 저장한 `arrTemp`에서 현재값과 다음값을 계속 비교하여  
    completeCnt(같은 배포일에 완료된 cnt)를 계산하는데에는 약간 어려웠습니다.  
    똑같은 시간이 걸리는 항목들이 있을 때는 계산이 안되어서 삽질을 하다가  
    조건에 `(currData > nextData)`이 조건을 `(currData >= nextData)` 바꾸니  
    해결되는 마술이...
- 문제를 해결하는데에 집중했습니다. 퍼포먼스는 전혀 모르겠네요..  
    그래도 오늘은 제 힘으로 풀어서 뿌듯한 하루였슴다!

## 코드
```js
// https://programmers.co.kr/learn/courses/30/lessons/42586
// 기능개발

// 1차시, 통과 성공
function solution(progresses, speeds) {
    let answer = [];
    const arrTemp = [];

    // 먼저 항목 1개당 몇일이 걸리는지 계산하여 arrTemp에 push
    progresses.forEach((progress, i) => {
        const currSpeed = speeds[i];
        let currProgress = progress;

        let day = 0;
        while (currProgress < 100) {
            currProgress += currSpeed;
            day++;
        }

        arrTemp.push(day);
    });

    // arrTemp를 순회하며 현재 값과 다음값을 비교. 같거나 현재값이 크면 completeCnt++ 후
    // 최종 return 값인 answer에 계산된 completeCnt를 push
    for (let i = 0; i < arrTemp.length; i++) {
        const currData = arrTemp[i];
        const nextData = arrTemp[i + 1];
        let completeCnt = 1;

        if (currData >= nextData) {
            let nLoop = i + 2;
            completeCnt++;
            i++;

            while (currData >= arrTemp[nLoop]) {
                completeCnt++;
                i++;
                nLoop++;
            }
        }
        answer.push(completeCnt);
    }

    return answer;
}
```
