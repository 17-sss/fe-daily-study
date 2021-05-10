function solution(numbers, target) {
  // 0개가 음수인경우 => 1가지
  //1개가 음수인경우 => numbers.length 개
  //2개가 음수인경우
  //3개가 음수인경우
  //numbers.length 개가 음수인경우
//   let dfs =[{idx: 0, sum: 0}]
  var answer = 0;
  const dfs = (idx = 0, sum = 0) => {
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };
  dfs();
  return answer;
}
// reduce((acc, cur, i) => {
//     cur = idx < i && i <= j ? -1 * cur : cur;
//     acc += cur;
//     return acc;
//   });
const numbers = [1, 2, 3, 4, 5, 6];
const target = 3;
console.log(solution(numbers, target));

// if (idx > numbers.length) return cnt;
// let temp;
// for (let j = idx; j < numbers.length; j++) {
//   temp = numbers.map((v,i) => {
//     return idx-1 < i && i <= j ? -1 * v : v;
//   })
//   if (temp.reduce((acc,cur) => acc += cur) === target) cnt++;
// }
// idx++;
// return dfs(idx, cnt);
// };

// var answer = dfs();
