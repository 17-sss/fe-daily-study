프로그래머스 level.1 #42862: 체육복
https://programmers.co.kr/learn/courses/30/lessons/42862


reserve에 있는 학생이 lost에도 있는 지 확인. 있다면 빌려주지도, 잃어버리지도 않은 학생. 즉 1개만 가진 학생이된다.
- reserve에서 뺀다. = newReserve
- lost에서 뺀다. = newLost
lost를 순회하면서 newReserve에 el+1이나 el-1인 숫자가 있는 지 확인. 있다면 count +1을 하고 newReseve에서 해당 숫자를 제외한다.(중복방지)


### 첫번째 시도:
- reserve에 있는 학생이 lost에도 있다면 reserve가 되면 안된다는 생각으로 새로운 reserve배열(newReserve)를 만들어서 순회를 도는 방식. +1이나 -1을 한 숫자가 newReserve에 있다면 해당 숫자는 newReserve에서 삭제하고 다시 순회를 도는 방법으로 접근.
- 실패. 테스트 1 & 2는 통과했으나 모든 테스트 케이스를 통과하지는 못함.
```js
function solution(n, lost, reserve) {
    let count = n - lost.length;
    let newReserve = reserve.filter(el => !lost.includes(el));
    lost.forEach(el => {
        if (newReserve.includes(el + 1)) {
            count++;
            const idx = newReserve.indexOf(el + 1);
            newReserve.splice(idx, 1);
        } else if (newReserve.includes(el - 1))  {
            count++;
            const idx = newReserve.indexOf(el - 1);
            newReserve.splice(idx, 1);
        }
    })
    return count;
}
```

최종 제출 답안(블로그 참고함):
지난 주에 이어 첫번째 시도를 조금 변형한 형태로 재시도 해봤으나 실패. 시간이 너무 오래 지체되는 것 같아 블로그를 참고하기로 함.
결국 reserve에도 있는 학생이 lost에도 있다면 그 학생은 결국 체육복을 1개만 가진 학생이므로 lost에서도 빠져야함. newReserve 뿐만 아니라 newLost 또한 만들어줌.
'체육수업을 들을 수 있는 학생들의 수 = 전체 학생의 수 - 체육복을 빌리지 못한 학생' 이라는 식이 성립하므로,
filter를 돌면서
1. 체격차가 1인 학생을 찾고,
2. 체격차가 1인 학생이 없으면 체육복이 없는 상태(lost)로 남고,
3. 체육복을 빌려준 학생을 제외한 상태로 newReserve를 업데이트한다.

```js
function solution(n, lost, reserve) {
    let newReserve = reserve.filter(el => !lost.includes(el));
    const newLost = lost.filter(el => !reserve.includes(el));

    const noCloth = newLost.filter(l => {
        const tempReserve = newReserve.find(r => Math.abs(r - l) === 1);//체격차가 1인 학생을 찾고,
        if (!tempReserve) return true;//체격차가 1인 학생이 없으면 체육복이 없는 상태(lost)로 남고,
        newReserve = newReserve.filter(r => r !== tempReserve);//체육복을 빌려준 학생을 제외한 상태로 newReserve를 업데이트한다.
    }).length;
    return n - noCloth; //전체 학생수에서 체육복을 빌리지 못한 학생 수를 뺀다.
}
```

### 느낀점: 
요소를 제외하는 방법으로 splice를 쓰기보다 filter를 사용하면 index가 변경되는 등의 side effect를 고려하지 않아도 된다는 장점이 있다. 고차함수 쓰는 습관을 들일 것.

참고한 블로그:
https://jsikim1.tistory.com/52