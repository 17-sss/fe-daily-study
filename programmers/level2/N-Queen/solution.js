function solution(n) {
 let arr = new Array(n).fill(-1);

 const check = (x, y, arr) => {
//  if (arr[x] !== -1) return false;

  for (let i = 0; i < n; i++) {
   if (arr[i] === -1) continue;
   if (arr[i] === y) return false;
   if (Math.abs(arr[i] - y) === Math.abs(i - x)) return false;
  }
  return true;
 };
 let cnt = 0;

 const dfs = (_arr, level) => {
  if (level === n) {
   cnt++;
   return;
  }

  for (let i = 0; i < n; i++) {
   if (!check(i,level, _arr)) return;

   _arr[i] = level;
   dfs(_arr ,level + 1);
 
  }
 };
 dfs(arr, 0);
 console.log(cnt);

 return cnt;
}

solution(4);
