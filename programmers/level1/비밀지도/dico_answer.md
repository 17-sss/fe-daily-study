### 비밀지도 21.04.21
조건 & 초기계획:
하나라도 1이 있다면 벽(#), 하나라도 0이 있다면 공백("")
각 배열 arr1 과 arr2 의 원소들을 이진수로 변환을 하되, 앞 n개의 숫자만 잘라서 저장한다. 여기서 배열 두 개가 새로 만들어짐.
두 배열을 비교하면서 하나라도 #이 있을 경우 #이 되고, 둘 다 ''일 때는 ''를 반환한다.

#### 첫번째 시도(미완):
```js
function solution(n, arr1, arr2) {
    //십진수 변환 + 앞 n개 글자만 잘라서 반환 + n보다 짧을 경우 끝에  0을 붙임.
    let newArr1 = arr1.map(v => (v.toString(2).padStart(n, 0).replace(/1/g, '#').replace(/0/g, ' ').split('')));
    let newArr2 = arr2.map(v => (v.toString(2).padStart(n, 0).replace(/1/g, '#').replace(/0/g, ' ').split('')));

    console.log(newArr1);
    console.log(newArr2);
    //두 배열을 인덱스로 비교하면서 하나라도 #일 경우, #을 반환, 둘 다 공백일 경우, ''를 반환
    //비트 연산자 (|) 는 십진수를 반환한다. 1|0 이면 1이 true이기 때문에  1을 반환.
    const answer = newArr1.map((str, i) => {
        console.log(str);
        let newStr = '';

        str.replace && newArr2[i]
        return
    })
}
```

#### 두번째 시도(통과):
```js
function solution(n, arr1, arr2) {
    let newArr1 = arr1.map(v => (v.toString(2).padStart(n, 0).split('')));
    let newArr2 = arr2.map(v => (v.toString(2).padStart(n, 0).split('')));

    return answer = newArr1.map((arr, i) => {
        return arr.map((letter, j) => String(letter | newArr2[i][j]).replace(/1/g, '#').replace(/0/g, ' '));
    }).map(arr => arr.join(''));
}

//test code
solution (5, [9, 20, 28, 18, 11], 	[30, 1, 21, 17, 28])
```
#### 새롭게 알게된 점:
- **비트 연산자(|)**는 OR 조건과 유사하다. 반면 비트 연산자 (|) 는 **십진수**를 반환한다. (1|0) 이면 1이 true이기 때문에  1을 반환. (or은 하나라도 true이면 true값을 바로 반환하기 때문에)
- **`padStart()`**는 특정 문자를 원하는 길이만큼 문자열 '앞'에 더해준다. '뒤쪽'에 더해져야 한다면 `pasEnd()`메서드를 사용할 수 있다.
- 정규표현식에서 숫자는 특수문자도 아니고, 문자 그대로 해석되어야 하는 대상이 아니기 때문에 백슬래시(`\`)는 사용하지 않는다. 그냥 `/1/g` 면 1을 찾아준다.