## 어려웠던 점 & 회고

-   일단 DFS & BFS 문제인 건 알겠지만, 도저히 재귀는 힘들 것 같아서  
     stack을 사용하여 해결하였습니다!

## 코드 (2차시, 통과 성공 (84ms, faster than 59.62%) )

```js
// https://leetcode.com/problems/keys-and-rooms/
// Keys and Rooms

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

class Room {
    constructor(idx, keys) {
        this.idx = idx;
        this.keys = keys;
        this.visited = false;
    }
}

const canVisitAllRooms = (rooms) => {
    // 1. 만들어준 Room이란 Class를 활용하여, index와 key들을 넣어줌
    const roomList = rooms.map((keys, idx) => new Room(idx, keys));

    // 2. stack으로 탐색, 시작은 0번째니까 미리 넣어줌
    const stack = [roomList[0]];

    while (stack.length > 0) {
        // 3. 처음부터 stack에서 pop 후. 방문한걸로 체크!
        // currRoom 변수는 위에 선언한 Room 이란 Class 구조를 가지고 있음
        const currRoom = stack.pop();
        currRoom.visited = true;

        // 4. currRoom의 keys 배열에 하나라도 있다면..
        if (currRoom.keys.length > 0)
            currRoom.keys.forEach((key) => {
                // 만약 key를 가지고 key에 써져있는 방으로 갔는데 이미 방문했네? 그럼 ㅃㅇ
                if (roomList[key].visited) return;
                // 아니라면 일단 stack에 key에 써져있는 방을 넣어줌.
                return stack.push(roomList[key]);
            });
    }
    // 5. roomList의 모든 room의 visited가 true가면 true반환, 아니라면 false
    return roomList.every((room) => room.visited);
};
```