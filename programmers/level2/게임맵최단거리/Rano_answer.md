## 어려웠던 점
- ~~보물 찾기 하는 기분이고 될 줄 알았으나.. 실패라니...ㅠ~~

## 코드 (통과 실패, 점수: 32.3)
```js
// https://programmers.co.kr/learn/courses/30/lessons/1844
// 게임 맵 최단거리

/*
    ** 메모 **
    [
        [1, 0, 1, 1, 1], 
        [1, 0, 1, 0, 1], 
        [1, 0, 1, 1, 1], 
        [1, 1, 1, 0, 1], 
        [0, 0, 0, 0, 1]
    ]
    - 시작 위치는 
        첫번째 배열 ↓ 0번째 (y축) --> map[0 (y축)]
        첫번쨰 배열 → 0번째 (x축) --> map[0 (y축)][0 (x축)]
    - 시작 위치 기준 4방향을 모두 구하려면 (규칙 메모)
                        [ -1y, 0x  ]
        [  0y, -1x  ]   [  0y, 0x  ]    [  0y, 1x  ]
                        [  1y, 0x  ]
*/
function solution(maps) {
    const mapInfo = {
        yPos: [1, -1, 0, 0],
        xPos: [0, 0, 1, -1], // y, x를 순차적으로 조합하면 "남, 북, 동, 서" 순서 ★★★ (우선순위 순!)
        rowLength: maps.length, // -1은 y축의 최대
        colLength: maps[0].length, // -1은 x축의 최대
    };
    const { yPos, xPos, rowLength, colLength } = mapInfo;

    let [y, x] = [0, 0]; // 진행중인 위치
    let resultCnt = 1;   // 반환 값
    maps[y][x] = '+';    // 시작지점은 이미 방문한거임!

    let nLoopCnt = 0;
    while (true) {  // 무한루프
        if (nLoopCnt === colLength * rowLength) break;
        if (y === colLength - 1 && x === rowLength - 1) break;

        for (let i = 0; i < yPos.length; i++) {
            const curY = y + yPos[i];
            const curX = x + xPos[i];
            if (curY <= -1 || curX <= -1) continue;
            if (curY >= rowLength || curX >= colLength) continue;

            const loc = maps[curY][curX];
            if (loc === 0 || loc === '+') continue; // 0은 벽, '+'는 방문한 곳.

            maps[curY][curX] = '+';
            y = curY;
            x = curX;

            resultCnt++;
        }
        nLoopCnt++;
    }

    return maps[rowLength-1][colLength-1] === '+' ? resultCnt : -1;
}

solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
]); // 11

solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
]); // -1
```