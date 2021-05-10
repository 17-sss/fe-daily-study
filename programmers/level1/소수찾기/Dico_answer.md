프로그래머스 level 1. 소수 찾기
https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript


이전 답안 (실패: 테스트 케이스 부분적으로만 통과)

1~n까지의 숫자 중에 소수의 갯수를 찾아서 반환하는 문제
1과 자기자신으로만 나누어져야하며, 1은 소수가 아니므로 카운트 하지 않아야 한다.(마지막에 -1)
2,3,4...등등 으로 나누었을 때 나머지가 0이 아닌 것들이 발견될 때(% arr[i] !== 0)마다 count++를 한다.
```js
function solution(n) {
    //2 ~ n까지 count up하면서 각각의 숫자가 약수(나뉘어지는 수)가 있는지 내부 for문을 진행. 2, 3, 4,,,
    //나뉘어지는 수
    var soSu = 0;
    for (var j = 2; j <= n; j++) {
        //나누는 수
        var count = 0;
        for(var i = 2; i <= (Math.round(j / 2)); i++) {
            if (j % i === 0 ){
              //나머지가 0인 경우(j가 i의 배수인 경우)
                count++; //소수가 아닌 수
                break;
            }
        }
        if(count === 0) soSu++;
    }
//     var numString = JSON.stringify(n);
//     var div = numString.length * 2;
//    return Math.round(n / div);
    return soSu;
}
```

새로운 풀이(21.04.13):
1. 1부터 n까지 들어간 배열을 만든다.
2. (1은 소수가 아니기 때문에) 2부터 √n까지(< i*i < n) 반복문을 돌면서 안에서 arr[i]의 배수들을 0으로 만든다.
3. 1은 0으로 만들어준다.
4. filter로 0을 모두 제거한다.
5. arr.length를 반환한다.

```js
function solution(n) {
    //1.
    let arr = Array.from({length: n}, (v, i) => i + 1);
    //2.
    for (let i = 1; i*i < n; i++) {
        //arr[i]가 0이 아니라면
        if (arr[i]){
            let num = arr[i];//기준이 되는 수. 이 숫자의 배수들을 제거.
            //j는 기준이 되는 num의 제곱수. 즉, 배열안의 num의 배수 중 가장 큰 수. 제곱값보다 큰 num의 배수를 모두 0으로 대체.
            //제곱수 전의 num의 배수는 이미 제거된 상태⭐️
            for(let j = num * num; j <= n; j += num) {
                arr[j - 1] = 0;
            }
        }
    }
    //3.
    arr[0] = 0;
    //4.
    arr = arr.filter(v => v !== 0);
    //5.
    return arr.length;
}

//testcode
console.log("solution(10)", solution(10)) //4
console.log("solution(5)", solution(5)) //3
```