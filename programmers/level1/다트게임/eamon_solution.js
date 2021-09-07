function solution(dartResult) {
 var answer = 0;
 const root = dartResult.split(/\d+/gi);
 const score = dartResult.split(/\D+/gi);

 let star = 0;
 for (let i = score.length - 2; i >= 0; i--) {
  let num = 0;
  switch (root[i + 1][0]) {
   case 'T':
    num = score[i] ** 3;
    break;
   case 'D':
    num = score[i] ** 2;
    break;
   case 'S':
    num = score[i] ** 1;
    break;
  }
  if (star === 1) {
   num = num * 2;
   star = 0;
  }

  if (root[i + 1][1]) {
   switch (root[i + 1][1]) {
    case '*':
     num = num * 2;
     star = 1;
     break;
    case '#':
     num = num * -1;
     break;
   }
  }

  answer += num;
 }
 return answer;
}
