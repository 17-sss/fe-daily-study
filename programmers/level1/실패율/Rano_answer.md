## 어려웠던 점 & 회고
- 역시 Lv2와 다르게 지문 읽고 흐름대로 만들면 Lv1은 되네요.  
    그래도 실패율은 언제봐도 햇갈리는 문제..

## 풀이
- 먼저 `N`번째 스테이지 (최대 스테이지)까지 forLoop를 실행하도록 합니다.
    - `currStatgesCnt`라는 변수는 배열`stages`의 상태가  
        변경되기전에 stages의 길이를 저장하기 위한 변수
    - `notClearCnt`는 forLoop의 idx에 1을 더해준 값과  
        배열 `stages` 안의 같은 값을 필터링해주어 length를 구합니다.  
        (이렇게하면 아직 forLoop의 idx에 해당하는 스테이지를 클리어하지 못한 유저의 cnt가 세어집니다.)
    - 위 2개의 변수를 정의 후, 다음 loop에서 쓰일 stages 상태를 업데이트 해주기 위해  
        stages안에서 (idx + 1) 보다 큰 값들을 필터링하여 stages를 업데이트 해줍니다.
    - `(notClearCnt / currStagesCnt)`를 해주어 실패율을 계산해줍니다. (`failureRate`)
    - 현재 idx에 +1 해준 값과 계산한 실패율과 함께 결과 배열(`answer`)에 push 해줍니다  
        `answer.push([idx + 1, failureRate]);`
- 위에서 계산한 결과 배열(`answer`)을 sort함수를 통해 정렬해줍니다.  
    이 때 정렬 기준은 위 과정에서`answer.push([idx + 1, failureRate])` 이렇게 push를 했으니  
    실패율을 저장한 위치인 [1]번째 값을 기준으로 해줍니다.
    - 그 후 마지막으로 스테이지들의 정보인  
        [0]번째 값만 map함수를 사용하여 새 배열을 만들어서 return 합니다.

## 코드 (통과 성공)
```js
// https://programmers.co.kr/learn/courses/30/lessons/42889
// 카카오 2019 코딩테스트 - 실패율
function solution(N, stages) {
    const answer = [];
    /* 
        [1]   1 / 8 = 0.125
        [2]   3 / 7 = 0.428...
        [3]   2 / 4 = 0.5
        [4]   1 / 2 = 0.5
        [5]   0 / 1 = 0
    */
    [...Array(N)].forEach((_, idx) => {
        const currStagesCnt = stages.length;
        const notClearCnt = stages.filter((v) => v === idx + 1).length;
        stages = stages.filter((v) => v > idx + 1);

        const failureRate = notClearCnt / currStagesCnt;
        answer.push([idx + 1, failureRate]);
    });

    return answer.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // [3, 4, 2, 1, 5]
solution(4, [4, 4, 4, 4, 4]);          // [4, 1, 2, 3]
```