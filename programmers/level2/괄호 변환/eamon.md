## 괄호변환


```js
function solution(p) {
 var answer = '';

 if (p.length === 0) return '';
 let dived = 0;
 let opCnt = 0;
 let clCnt = 0;
 for (let i = 0; i < p.length; i++) {
  if (p[i] === '(') ++opCnt;
  if (p[i] === ')') ++clCnt;
  if (clCnt === opCnt) {
   dived = i;
   break;
  }
 }
 let u = p.slice(0, dived + 1);
 let v = p.slice(dived + 1);
 if (!check(u)) {
  console.log(p, 'true');
  answer += '(';
  answer += solution(v);
  answer += ')';

  // 첫번째, 마지막 문자 제거하고 나머지 반전 후 뒤에 붙이기
  for (let j = 1; j < dived; j++) {
   if (p[j] == ')') answer += '(';
   if (p[j] == '(') answer += ')';
  }
 } else {
  console.log(p, 'false');
  answer += u; // 그냥 넣고
  answer += solution(v); // 나머지에 대해 재귀
 }

 return answer;
}

const check = (u) => {
 let stack = [];
 ///    let map = { "(" : ")"}
 for (let i = 0; i < u.length; i++) {
  if (u[i] === '(') stack.push(u[i]);
  if (u[i] === ')') {
   if (stack.length === 0 && i < u.length - 1) return false;
   stack.pop();
  }
 }
 return true;
};
```
