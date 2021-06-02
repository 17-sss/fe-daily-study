```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 1;
  let start = 0;
  let end = 1;
  const offset = 97;
  let alpa = new Array(26).fill(-1);
    if(s === "") return 0
  alpa[s[start].charCodeAt(0) - offset] = start;

  while (end < s.length) {
    const idx = s[end].charCodeAt(0) - offset;
    const startIdx = s[start].charCodeAt(0) - offset;
    const subArr = s.slice(start, end + 1).split("");

    if (alpa[idx] === -1) {
      alpa[s[end].charCodeAt(0) - offset] = end;
    } else if (subArr.indexOf(s[end]) === subArr.length -1) {
      alpa[s[end].charCodeAt(0) - offset] = end;
    } else {
      start = 1 + alpa[idx];
      alpa[s[start].charCodeAt(0) - offset] = start;
      alpa[idx] = end;
    }
 
    maxLen = Math.max(maxLen, s.slice(start, end + 1).split("").length);
    end++;
  }
  return maxLen;
};



```