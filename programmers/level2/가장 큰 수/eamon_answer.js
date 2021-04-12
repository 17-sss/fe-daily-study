function solution(numbers) {
  var answer = "";
  let strNums = numbers
    .map((v) => v.toString())
    .sort((a, b) => b + a - (a + b));
  if (strNums[0] === "0") return (answer = "0");
  else answer = strNums.join("");

  return answer;
}

let numbers = [12, 9, 5, 34, 341, 3, 30];

// 9 , 5 , 34 341 3 30
// 3, 30, 34 , 341

console.log(solution(numbers));
