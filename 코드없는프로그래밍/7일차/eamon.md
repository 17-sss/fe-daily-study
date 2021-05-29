1) 125. Valid Palindrome
```js

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const sp = s.replace(/[^a-z0-9]/gi,"").toLowerCase()
    let start = 0
    let last = sp.length -1

    while(start<=last){
        if(sp[start] === sp[last]) {
            start++
            last--
        }else return false
    }
    return true
};

```
아스키코드로 예외를 제거하는 것보다 정규표현식으로 제거하는게 일반적이고 많이 쓰일거같아서 그냥 그렇게 했습니당.

2) Valid Palindrome II

```js

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let res = [];
  const dfs = (res, start = 0, last = s.length - 1, pair = true) => {
    if (start > last) {
      res.push(true);
      return;
    }
    if (s[start] === s[last]) {
      start++;
      last--;
      dfs(res, start, last, pair);
    } else if (pair) {
      dfs(res, start + 1, last, false);
      dfs(res, start, last - 1, false);
    } else {
      return;
    }
  };
  dfs(res);

  return res[0]===true;
};

```

dfs 를 쓰긴했는데 방법이 맞는지 모르겠습니다.