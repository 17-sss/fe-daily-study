//top-down

```js 
var wordBreak = function(s, wordDict) {
    if(!wordDict) return false;
  const set = new Set(wordDict)  
  let sub = new Array(s.length)
  
 function Wb(idx) {
  if (sub[idx] !== undefined) return sub[idx];


  let res = false;

  if (idx === s.length) return true;

  for (let i = idx; i < s.length; i++) {
    if (set.has(s.substring(idx, i + 1)) && Wb(i + 1)) {
      res = true;
      break;
    }
  }

  sub[idx] = res;
  return res;
         
    return
 }
 return Wb(0)
};

```

```js

const wordBreak = (s, wordDict) => {
  if(!wordDict) return false;
	// bottom up

  let dp = new Array(s.length + 1);
  dp[0] = true; 
  let matches=[];
  for(let i = 1; i <= s.length; i++) {
   
    for(let j = 0; j<i; j++) {
	  	if(dp[i]) break; 
      if(dp[j] && wordDict.indexOf(s.substring(i,j)) >= 0) {

        dp[i] = true;
        break;
      }
    }
  }
  return Boolean(dp[s.length]);
};

```