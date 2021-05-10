//Keys and Rooms
//DFS(깊이우선탐색)로 풀어보자!

/**
 * rooms라는 2중 배열이 주어진다.
 * rooms의 길이 -1 가 가장 많은 요소가 가장 끝 숫자의 방번호가 되고, 모든 방번호가 visited에 등장해야 한다.
 * room의 길이랑 visited가 가진 true의 갯수를 최종적으로 비교하면 된다!!
 *
 */

// visited 예시: [true, false, false, false]

let canVisitAllRooms = function(rooms) {
   let count = 0;
   const visited = Array(rooms.length).fill(false);  //stack에 길이가 있으면 시간복잡도를 줄일 수 있음.
    function dfs(index) {
        if (visited[index]) return;
        visited[index] = true;
        rooms[index].forEach(key => {
            dfs(key);                               //return 조건이 따로 필요x. 배열을 모두 순회하면 끝!
        })
    }
    dfs(0);
    visited.forEach(el => {
        if (el === true) count++;
    })
                                                    // visited.filter(visit => visit).length === rooms.length;
    return count === rooms.length;
};

