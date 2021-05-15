## 어려웠던 점 & 회고
- 분명 문제의 의도는 이게 아니었던 것 같은데..  
- 그래도 정규표현식 쓰면서 `replace`에 두번째 인자로  
    콜백을 넘겨주는 걸 이번에 처음 해봤는데 잘되어서 좋았습니다!

## 코드

```js
// https://leetcode.com/problems/decode-string/
// decodeString : 문자열 변환

const decodeString = (str) => {
    let result = str;

    while (result.match(/[0-9]/g)) {
        result = result.replace(/[0-9]+\[[a-z]+\]/g, (currStr) => {
            const nLoop = currStr.match(/[0-9]+/g)[0];
            const str = currStr.match(/\[[a-z]+\]/g)[0].replace(/\[|\]/g, '');

            let resultStr = '';
            for (let i = 0; i < nLoop; i++) resultStr += str;
            return resultStr;
        });
    }

    return result;
};
```
