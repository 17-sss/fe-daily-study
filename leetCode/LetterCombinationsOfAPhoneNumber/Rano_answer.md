## 어려웠던 점 & 회고

-   이번엔 재귀를 써봤는데, 솔직히 어제했던 `while`문으로 푼 것보다 이해가 안갑니다
-   지금 풀었는데 왜 돌아가는걸까? 하고 디버깅 메모 해봤습니다.

## 코드 (1차시, 통과 성공 (76ms, faster than 68.86%) )

```js
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Letter Combinations of a Phone Number
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    const result = [];
    if (!digits) return result;

    const arrNums = [null, null, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const arrDigits = digits.split('').map((v) => +v);

    const dfs = (word, idx) => {
        if (idx < arrDigits.length) {
            const currDigit = arrDigits[idx];
            const currChars = arrNums[currDigit].split('');
            currChars.forEach((char) => dfs(word + char, idx + 1));
        } else result.push(word);
    };

    dfs('', 0);
    return result;
};
```

## 디버깅 끄적끄적

```
실행: letterCombinations("23");

- arrDigits.length: 2
```
```
callStack 1
    word    idx     currDigit   currChars
    ''      0          2        [a, b, c]
```
```
    callStack 2 (forEach, 0)
        word    idx     currDigit   currChars
        a       1           3       [d, e, f]

        (forEach, 0)
        callStack 3
            word    idx
            ad      2
                --> push (ad)

        (forEach, 1)
        callStack 3
            word    idx
            ae      2
                --> push (ae)

        (forEach, 2)
        callStack 3
            word    idx
            af      2
                --> push (af)
```

```
    callStack 2 (forEach, 1)
        word    idx     currDigit   currChars
        b       1           3       [d, e, f]

                        (forEach, 0)
        callStack 3
            word    idx
            bd      2
                --> push (ad)

        (forEach, 1)
        callStack 3
            word    idx
            be      2
                --> push (ae)

        (forEach, 2)
        callStack 3
            word    idx
            bf      2
                --> push (af)
```

```
    callStack 2 (forEach, 2)
        word    idx     currDigit   currChars
        c       1           3       [d, e, f]

                        (forEach, 0)
        callStack 3
            word    idx
            cd      2
                --> push (ad)

        (forEach, 1)
        callStack 3
            word    idx
            ce      2
                --> push (ae)

        (forEach, 2)
        callStack 3
            word    idx
            cf      2
                --> push (af)
```
