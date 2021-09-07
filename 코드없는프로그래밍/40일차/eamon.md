# 79. Word Search

 문제 [링크] https://leetcode.com/problems/word-search/

 자료구조 : BackTracking  

 성공~


```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
 let first = [];
 let check = [];
 for (let i = 0; i < board.length; i++) {
  check.push([]);
  for (let j = 0; j < board[0].length; j++) {
   if (board[i][j] === word[0]) first.push([i, j]);
   check[i].push(0);
  }
 }
 let arr = [];
 const BT = ([y, x], copy, level = 0) => {
  // let copy = JSON.parse(JSON.stringify(sub))
  // let copy = [...sub] //=> 이거 오래걸림
  // for(let i =0; i<sub.length; i++){
  //     copy[i] = [...sub[i]]
  // }
  if (level === word.length) {
   return true;
  }
  if (y < 0 || y > board.length - 1) return false;
  if (x < 0 || x > board[0].length - 1) return false;
  if (board[y][x] !== word[level]) return false;
  if (copy[y][x]) return false;
  copy[y][x] = 1;
  const res =
   BT([y, x + 1], copy, level + 1) ||
   BT([y, x - 1], copy, level + 1) ||
   BT([y + 1, x], copy, level + 1) ||
   BT([y - 1, x], copy, level + 1);
  copy[y][x] = 0; // 참조를 끊는 것보다는 참조한거 를 되돌리는 습관
  return res;
 };

 return first.reduce((acc, cur, idx) => {
  return acc || BT(cur, check);
 }, false);
};
```


잘한 점 : BT 로직 어려운데 집중해서 잘짠듯 깔ㄲ므하게 고차함수 쓰고!! 

공부할 것 : 참조와 값, Deep copy 와 copy (깊은 복사와 얕은 복사) , 깊은 복사 방법