문제 출처: https://leetcode.com/problems/happy-number/submissions/

첫 시도: '배열' 자료구조를 이용해 해결하려고 함. 미완.
```js
var isHappy = function(n) {
    let sum;
    const digit = String(n).split('');
    const sqr = digit.map(v => v * v);
    sqr.forEach(el => {
        sum += el;    
    })
    const isHappyNum = sum !== 1 ? isHappy(sum) : sum;
};
```

두번째 시도: 'Set' 을 이용해 해결.
```js
let isHappy = function(n) {
    const set = new Set();//유사배열
    while(n !== 1) {
        n = String(n).split('').reduce((acc, cur) => acc += cur * cur, 0)
        if(set.has(n)) return false;
        set.add(n);
    }
    console.log("set:", set);    //set: Set(4) { 82, 68, 100, 1 }
    return true;
}
```

test code: 
```js 
isHappy(19); //true
```
느낀점: 
Set을 사용하면 배열을 사용하는 것보다 소요시간이 절약된다(근소한 차이지만).
제이슨이랑 네이스의 도움이 아니었으면 풀기가 상당히 힘들었을 것. 어떤 때에 new Set()의 자료구조를 사용하는 것이 유리한지 알아봐야할 것 같다.
그리고 늘 실행 "순서"에 유의할 것.

