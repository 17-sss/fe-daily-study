function solution(expression) {
 var answer = 0;
 const num = expression.split(/[\+\-\*]/gi);
 const express = expression.replace(/[0-9]/gi, '').split('');
 // 숫자와 표현식

 let sum = [];

 const cases = [
  ['+', '-', '*'],
  ['+', '*', '-'],
  ['*', '+', '-'],
  ['*', '-', '+'],
  ['-', '+', '*'],
  ['-', '*', '+'],
 ];
 // 나올수있는 경우의수

 // 재귀함수 시작
 const recursion = (nums, exp, c, i = 0) => {
  if (i === 3) {
   sum.push(Math.abs(nums));
   return;
  }

  const idx = exp.indexOf(c[i]);
  if (idx !== -1) {
   const arr = [
    ...nums.slice(0, idx),
    eval(nums[idx] + c[i] + nums[idx + 1]),
    ...nums.slice(idx + 2, nums.length),
   ];
   const newExp = exp.filter((v, i) => i !== idx);
   recursion(arr, newExp, c, i);
  } else {
   i++;
   recursion(nums, exp, c, i);
  }
 };
 cases.map((c) => BE(num, express, c));
 return Math.max.apply(null, sum);
}

const expression = '100-200*300-500+20';

console.log(solution(expression));
// 빽 트레킹을 쓰려했으나 빽트레킹이 아닌 리컬션만 쓴거같다.
//어려웠던점 splice 는 exp 에 직접 영향을 준다. (나중에 공부 왠만하면 쓰지말자)
