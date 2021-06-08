# Decode String
https://leetcode.com/problems/decode-string/

- s를 반복문을 돌면서 pointer를 하나씩 옮겨간다.
- pointer가 string을 가리키면 newString에 쌓고, 숫자를 가리키면 num 에 쌓는다.
- 열리는 괄호("[")를 발견하면 string 스택에 newString이 추가된다.
- 닫히는 괄호("]"를 발견하면 stack의 top에 위치한 문자열을 pop해서 num 스택의 top에 위치한 숫자만큼 더한 후, stack의 가장 마지막 요소에 더한다.

```js
//실패
const decodeString = function(s) {
    const stack = [];
    const num = [];
    let newStr = '';
    for(let i = 0; i < s.length; i++) {
        const val = s[i];

        if (!isNaN(val * 1)) {
            num.push(parseInt(val));
        } else if (isNaN(val * 1) && val !== "[" && val !=="]"){
            //문자인 경우
            newStr += val;
        } else if (val === "[") {
            //열린 괄호인 경우
            stack.push(newStr);
        } else if (val === "]") {
            //닫힌 괄호인 경우
            const popStr = stack.pop();
            const count = num.pop();
            let str = '';
            for(let j = 0; j < count; j++) {
                str += popStr;
            }
            if(stack.length === 1) return str += str; //리턴을 여기서?
            if(stack.length) stack[stack.length - 1] += str;
        }
    }
};
```

- 빈 문자열을 미리 stack에 넣고, 열린 괄호가 나오면 빈 문자열('')을 넣어주는 걸로 바꿈.
- 리턴을 for문 밖에서 함.
```js
//성공
const decodeString = function(s) {
    const stack = [""];
    const num = [];
    let newStr = '';
    for(let i = 0; i < s.length; i++) {
        const val = s[i];

        if (!isNaN(val * 1)) {
            // let j = i + 1;
            let n = '';
            //숫자인 경우
            //숫자가 연속되는지 확인하고,
            //연속된 범위만큼 투 포인터를 이동해서 숫자를 누적.
            //오른쪽으로 옮겨진 포인터가 start 포인터로 갱신되어야 함.
            while(typof(s[i] * 1) === "number") {
                n += s[i];
                i++;
            }
            i--; //j는 숫자가 아닌 값이기 때문에 i가 다음 loop에서 해당값을 검사하려면 j - 1이 되어야 한다.
            num.push(parseInt(n));
        } else if (isNaN(val * 1) && val !== "[" && val !=="]"){
            //문자인 경우 - 
            stack[stack.length - 1] += val; //문자열이 더해짐
        } else if (val === "[") {
            stack.push("");
        } else if (val === "]") {
            const popStr = stack.pop();
            const count = num.pop();
            let str = popStr.repeat(count);
            stack[stack.length - 1] += str;
        }
    }
    return stack.pop();
};
```