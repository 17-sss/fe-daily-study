const priorities = [1, 1, 9, 1, 1, 1];
const prioritie = [2, 1, 3, 3];
const location = 0;

function solution(priorities, location) {
  let sort = priorities.map((v, i) => {
    return { idx: i, value: v };
  });

  let cnt = 0;
  while (true) {
    let temp = sort.shift();
    let Max = Math.max(...sort.map((v) => v.value));
    if (temp.value < Max) sort.push(temp);
    else {
      cnt++;
      if (temp.idx === location) return cnt;
    }
  }
}

console.log(solution(priorities, location));
