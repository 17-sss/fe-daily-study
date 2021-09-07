// function solution(n) {
//   if (n === 2) return 1;

//   var isPrime = function isPrime(num) {
//     if (num === 2) return true;

//     for (var i = 2; i < num; ++i) {
//       if (num % i === 0) return false;
//     }

//     return true;
//   };

//   var count = function count(n) {
//     var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
//     var cnt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
//     if (isPrime(i)) cnt++;
//     i++;
//     if (n + 1 === i) return cnt;
//     return count(n, i, cnt);
//   };

//   var answer = count(n);
//   return answer;
// } 

// 소수의 개수를 반환 // 소수를 반환
// arr = [3,,5,,7,,9,,11]
// cnt = [0,1,1,2,0,2,0,2,1,1,0,0,2]
// //에라모르겠다 체
// arr[i] 의 배수 제거 arr.map((v) v//)
// 3의 배수 제거
// 4의 배수 제거
// 5의 배수 제거
//제거하는 로직이 더 좋다
//console.log(solution(10));




function solution(n) {
    const s = new Set();
    for (let i = 3; i <= n; i += 2) {
      s.add(i);
    } 
    s.add(2);
    for (let j = 3; j ** 2 < n; j++) {
      if (s.has(j)) {
        for (let k = j ** 2; k <= n; k += j) {
          s.delete(k);
        }
      }
    }
    return s.size;
  }
  
  console.log(solution(20));
  