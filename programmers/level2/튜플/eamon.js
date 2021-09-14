function solution(s) {
 let set = new Set();
 let numbers = s
  .match(/({)[\d,]+(})/gi)
  .map((v) => v.replace(/{|}/gi, '').split(','));
 //정규식으로 {안의 숫자} 뽑아냄
 numbers.sort((a, b) => a.length - b.length);
 // 숫자 갯수가 적은 것부터 sort
 for (const number of numbers) {
  // number : [2 , 1]
  for (const num of number) {
   //  num : 2
   if (!set.has(+num)) set.add(+num);
   // set 에 없으면 추가
  }
 }

 return Array.from(set);
}
