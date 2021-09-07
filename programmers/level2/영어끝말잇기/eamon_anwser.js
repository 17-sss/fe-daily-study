function solution(n, words) {


  let stack = new Set();
  let curNum = 1;
  let cnt = {1:1};
  let i = 0;
  for (const v of words) {
    if (i === 0) stack.add(v);
    else {
      if (cnt[curNum]) cnt[curNum] += 1;
      else cnt[curNum] = 1;
      const str = words[i - 1];
      console.log(str, cnt);
      if (str.slice(str.length - 1, str.length) !== v.slice(0, 1) || stack.has(v))
        return [curNum, cnt[curNum]];
        
      stack.add(v);
    }
    if(curNum === n){
        curNum=1
    }else{
        curNum++
    }
    
    i++;
    if (i === words.length) return [0, 0];
  }
}

console.log(solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]));
