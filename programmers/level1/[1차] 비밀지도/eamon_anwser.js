function solution(n, arr1, arr2) {
  const binary = (num) => {
    let temp = num;
    let bi = [];
    for (let i = 0; i < n; i++) {
      bi.push(temp % 2);
      temp = Math.floor(temp / 2);
    }
    return bi.reverse();
  };

  const ar1 = arr1.map((v) => binary(v));
  const ar2 = arr2.map((v) => binary(v));
  let answer = [];
  ar1.forEach((v, i) => {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (v[j] + ar2[i][j] > 0) temp += "#";
      else temp += " ";
    }
    answer.push(temp);
  });
  return answer;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
