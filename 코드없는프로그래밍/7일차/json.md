## Valid Palindrome

### 풀이 1. 투 포인터

투 포인터를 통해 팰린드롬 여부를 확인했습니다.

```js
var isPalindrome = function (s) {
  // 알파벳 또는 숫자가 아닌 경우 빈 값으로 replace
  s = s.toLowerCase().replace(/[^a-z\d]/g, '');
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    // 투 포인터를 통해 양 끝의 피봇을 이동하며, 두 값이 같은지 검사.
    if (s[l++] !== s[r--]) return false;
  }
  return true;
};
```

### 풀이 2. reverse로 비교

반대로 뒤집은 문자열을 준비한 다음, 각 요소가 일치하는지 검사했습니다.

```js
/*
  문자열s 가 'abbadbba' 일 때, reverse는 'abbdabba'가 됩니다.
  두 문자열의 같은 인덱스에 있는 문자가 일치해야 회문이겠죠?! 
*/
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z\d]/g, '');
  const reverse = s.split('').reverse();
  return reverse.every((v, i) => v === s[i]);
};
```

## Valid Palindrome II

## 코드없는 프로그래밍

### 풀이

팰린드롬을 찾는 문제 2편입니다!  
문자를 서로 비교하면서, 0~1개의 문자를 삭제해도 팰린드롬을 만들 수 없다면 false를 반환합니다.
영상의 해설을 참고하여 풀이 했습니다.

1번 문제와는 다르게 주어진 문자열은 필터링이 필요없습니다!  
대신, 기회가 한 번 더 주어진다는 점!

**팰린드롬**

1번의 팰린드롬 함수와 필터링, if문 이후 처리만 다르고 나머지는 동일한 코드입니다.  
만약 다른 값을 찾게 된다면 두 값을 한 번씩 제외하며 가능한지 여부를 탐색하며,  
둘 중 하나만이라도 정상이라면 true를 반환합니다!

```js
var validPalindrome = function (s) {
  // l을 -1, r을 length로 할당한 이유는 while문의 조건에서 증감연산을 하기 위함!
  let l = -1;
  let r = s.length;
  while (l++ < r--) {
    if (s[l] !== s[r]) return recursive(s, l + 1, r) || recursive(s, l, r - 1);
  }
  return true;
};
```

**재귀 함수**

```js
var recursive = function (s, l, r) {
  // 팰린드롬 함수의 59 ~ 61번 라인과 동일한 구조이지만, 이미 기회를 1번 소진했으므로 불일치라면 false를 반환
  while (l < r) {
    if (s[l++] !== s[r--]) return false;
  }
  return true;
};
```

**설명**

문제의 해설처럼 기회를 1번 허용하는 부분이 중점입니다!  
먼저 주어진 문자열이 'cbbabzbc'일 때, 코드는 아래와 같이 동작합니다.

```
step 1. l = 0, r = 7
  s[l] = c
  s[r] = c
step 2. l = 1, r = 6
  s[l] = b
  s[r] = b
step 3. l = 2, r = 5
  s[l] = b
  s[r] = z ==> 불일치!
    recursive(s, 3, 5) || recursive(s, 2, 4) 호출!
      1. recursive(s, 3, 5)
        step 1. l = 3, r = 5
          s[l] = a
          s[r] = z ==> 불일치! return false
      2. recursive(s, 2, 4)
        step 1. l = 2, r = 4
          s[l] = b
          s[r] = b
        step 2. l = 3, r = 3
          return true;
```

**코드**

```js
var validPalindrome = function (s) {
  let l = -1;
  let r = s.length;
  while (l++ < r--) {
    if (s[l] !== s[r]) return recursive(s, l + 1, r) || recursive(s, l, r - 1);
  }
  return true;
};

var recursive = function (s, l, r) {
  while (l < r) if (s[l++] !== s[r--]) return false;
  return true;
};
```
