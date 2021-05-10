const canVisitAllRooms = function (rooms) {
    let array = new Array(rooms.length).fill(false);
  
    const dfs = (num) => {
      if (array[num]) return;
      array[num] = true;
      rooms[num].forEach((key) => {
        dfs(key); //return 조건이 따로 필요x. 배열을 모두 순회하면 끝!
      });
    };
    dfs(0);
  console.log(array)
    return array.filter((el) => el === true).length === rooms.length;
  };