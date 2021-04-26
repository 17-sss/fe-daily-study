// 1번풀이

function solution(n) {
  var answer = 0;
  var count = 0;

  for (var i = 2; i <= n; i++) {
    count = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) answer++;
  }
  return answer;
}

// 2번째 시도
// function solution(n) {
//   let count = 0;
//   let result = new Array(n)
//     .fill(1)
//     .map((v, i) => i + 1)
//     .filter((v) => v !== 1)
//     .forEach((v) => (isPrime(v) === true ? count++ : false));

//   console.log(count);
//   return count;
// }

// const isPrime = (number) => {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// 3번째 시도

// function solution(n) {
//   let count = 0;
//   for (let i = 2; i <= n; i++) {
//     isPrime(i) ? count++ : false;
//   }
//   console.log(count);
//   return count;
// }

// const isPrime = (number) => {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

solution(10);
solution(5);
