
### 첫번째 시도: 경우의 수가 너무 많음...1시간 이상 경과.(실패)
1. numbers의 요소 JSON.stringyify로 전부 문자열 변환.
2. join()으로 나올 수 있는 모든 조합 cases = []에 저장.
 - 가장 첫번째 숫자(가장 큰 단위)가 가장 큰 수가 제일 앞에 오는 수(firstNum)로 fix 되어야한다.
 - firstNum을 제외한 나머지 숫자들로 조합가능한 경우의 수를 구한 후 firstNum을 join한다.
3. cases 순회하면서 (숫자로 변환해서 비교) 가장 큰 수 찾아 biggest 변수에 저장.
4. biggest(문자열) 반환

```js
function solution(numbers) {
    const cases = [];
    let firstNum; //문자열
    let biggest;

    const convertToStr = numbers.map(n => JSON.stringify(n));
    convertToStr.forEach(str => {
        if (!firstNum) firstNum = str;
        if (parseInt(firstNum[0]) < parseInt(str[0])) firstNum = str;
    })
    const withoutFirstNum = convertToStr.filter(el => el !== firstNum);
    //모든 경우의 수 구하기 (각 숫자 앞에 firstNum을 join으로 붙여주기)
    withoutFirstNum. //여기서 포기...

    console.log("withoutFirstNum", withoutFirstNum);
    return biggest;
}
```

### 두번째 시도: 블로그 참고. (https://miiingo.tistory.com/343)
1. numbers의 요소를 toString()으로 전부 문자열 반환한 후,
2. string으로 변환한 요소들을 sort로 정렬한다.
 -  정렬 로직: (b + a) - (a + b) 를 비교해서 결과값이 양수인지 음수인지에 따라 왼쪽 값이 큰 지 오른쪽 값이 큰 지를 판단한다.
 - 그리고 큰 게 오른쪽으로 나열된다.
 - sort((a,b) => b-a) 가 왜 큰 수부터 정렬되는지 생각해보기
```js
function solution(numbers) {
    const answer = numbers
                    .map(num => num.toString())
                    .sort((a, b) => (b + a) - (a + b))
                    .join("");
    return answer[0] === '0' ? '0' : answer;
}

//test cases
console.log(solution([6, 10, 2])) //"6210"
console.log(solution([3, 30, 34, 5, 9])) //"9534330"
```

### 기억해둘 점:
Array.sort()는 기본적인 정렬, 오름차순.<br>
Array.sort().reverse()를 해야 내림차순.
