## 인프런 - 자바스크립트 알고리즘 풀이

### **01.** 문자열 탐색 - 회문문자열

**> 문제**

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라 함  
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES",  
회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성.  
단 회문을 검사할 때 대소문자를 구분하지 않음.

-   입력: `gooG`
-   출력: `YES`

**> 코드**

```js
function solution(s) {
    const str = s.toUpperCase();
    const S_LENGTH = str.length;
    const MAX_LOOP_CNT = Math.floor(S_LENGTH / 2);

    let leftPivot = 0;
    let rightPivot = S_LENGTH - 1;

    while (leftPivot <= MAX_LOOP_CNT - 1) {
        if (str[leftPivot] !== str[rightPivot]) return 'NO';
        leftPivot++;
        rightPivot--;
    }
    return 'YES';
}

let str = 'gooG';
console.log(solution(str));
```