function solution(n, arr1, arr2) {
  // 우선 배열을 전부 2진수로 바꾸고 padStart를 통해 자릿수를 맞춰준다.
  const a = arr1.map((v) => v.toString(2).padStart(n, 0).split(""));
  const b = arr2.map((v) => v.toString(2).padStart(n, 0).split(""));
  let result = [];
  console.log(a);

  // a와 b가 둘다 0일때만 빈칸 그 외에는 #을 추가한다.
  for (let i = 0; i < a.length; i++) {
    let str = "";
    for (let j = 0; j < b.length; j++) {
      if (a[i][j] === "0" && b[i][j] === "0") str += " ";
      else str += "#";
    }
    result.push(str);
    str = "";
  }
  return result;
}
