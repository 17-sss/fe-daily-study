const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];

// function solution(orders, course) {
//   // dfs? 더 모르겠네 .
//   //  코스 후보들은 각각
//   let test = [];
//   course.forEach((e) => {
//     test.push(...orders.filter((v) => e === v.length));
//   });
//   let answer = test
//     .filter((s) =>  orders.filter((v) => {
//           const code = v.match(new RegExp(`[${s}]`, "gi"));
//           if (!code) return false;
//           return s === code.join("");
//         }).length > 1
//     )
//     .sort();

//   return answer;
// }

function solution(orders, course) {
  const dfs = (order, target, combi, str = "") => {
    if (target === order.length) {
      if (str.length < 2) return;
      const index = combi.findIndex((v) => v[0] === str);
      if (index + 1) combi[index][1] += 1;
      else combi.push([str, 1]);
      return combi;
    } else {
      let plus = str + order[target];
      target++;
      dfs(order, target, combi, str);
      dfs(order, target, combi, plus);
    }
  };
  let cmb = [];
  orders.map((v)=>v.split("").sort().join("")).map((v) => dfs(v, 0, cmb));
  const arr = cmb.filter((v) => v[1] > 1);
let anwser =[];
console.log(cmb)
  course.forEach((num) => {
    anwser = [ ...anwser , ...arr
      .filter((v) => v[0].length === num)
      .sort((a, b) => b[1] - a[1])
      .reduce((arr, cur, i, array) => {
        if (cur[1] === array[0][1]) arr = [...arr, cur[0]];
        return arr;
      }, [])];
  });
  return anwser.sort()
}

console.log(solution(orders, course));

// const code = v.match(new RegExp(`[${s}]/gi`));
// if(!code) return false
// else {
//   return v === code.join("")
// }
// console.log(v === code.join(""))
