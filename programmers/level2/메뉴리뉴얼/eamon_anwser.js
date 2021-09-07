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
  const allMenu = orders
    .map((order) => order.split(""))
    .reduce((arrInit, arrCurr) => {
      arrInit.push(...arrCurr);
      return arrInit;
    }, [])
    .filter((str, idx, thisArr) => thisArr.indexOf(str) === idx)
    .sort();
  console.log(allMenu);
  const arrCase = [];
  course.forEach((c) => {
      for (let i = 0; i < allMenu.length; i++) {
          const val1 = allMenu[i];
          for (let j = i + 1; j < allMenu.length; j++) {
              const val2 = [...Array(c - 1)].reduce((init, _, idx) => {
                  const currValue = allMenu[j + idx];
                  if (!currValue) return init;
                  return init + currValue;
              }, '');
              const pushItem = val1 + val2;
              arrCase.indexOf(pushItem) <= -1 && arrCase.push(pushItem);
          }
      }
  });
  console.log(arrCase)
}
  //   const dfs = (order, target, combi, str = "") => {
  //     if (target === order.length) {
  //       if (str.length < 2) return;
  //       const index = combi.findIndex((v) => v[0] === str);
  //       if (index + 1) combi[index][1] += 1;
  //       else combi.push([str, 1]);
  //       return combi;
  //     } else {
  //       let plus = str + order[target];
  //       target++;
  //       dfs(order, target, combi, str);
  //       dfs(order, target, combi, plus);
  //     }
  //   };
  //   let cmb = [];
  //   orders.map((v)=>v.split("").sort().join("")).map((v) => dfs(v, 0, cmb));
  //   const arr = cmb.filter((v) => v[1] > 1);
  // let anwser =[];
  // console.log(cmb)
  //   course.forEach((num) => {
  //     anwser = [ ...anwser , ...arr
  //       .filter((v) => v[0].length === num)
  //       .sort((a, b) => b[1] - a[1])
  //       .reduce((arr, cur, i, array) => {
  //         if (cur[1] === array[0][1]) arr = [...arr, cur[0]];
  //         return arr;
  //       }, [])];
  //   });
  // return anwser.sort()


console.log(solution(orders, course));
