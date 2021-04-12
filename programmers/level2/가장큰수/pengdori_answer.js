function solution(numbers) {
  let num = numbers
    .map((v) => `${v}`)
    .sort(function (a, b) {
      return b + a - (a + b);
    })
    .join("");
  let result = numbers.reduce((acc, cur) => (acc = Number(acc) + Number(cur)));
  if (result === 0) {
    return "0";
  }
  return num;
}
