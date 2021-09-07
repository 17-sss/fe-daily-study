## 어려웠던 점
- 큐는 FIFO(선입선출)이다.. 스택은 LIFO(후입선출) 이다.. 기억하자
- 약간 보이는대로(?) 풀었다가 시간만 날리고 정확도 15인 코드를 만들어냈었습니다..
    - (Class 활용한 코드)
- 두번째 코드의 일부는 제가 풀었지만, 파이썬 코드를 참고하여 나머지 부분을 풀었습니다.
    - 정말정말 아직 멀었네요..

## 시나리오 메모 및 동작 방식 예
**[1] 시나리오 끄적끄적**  
```
1. 대기목록에서 제일 앞에 있는 문서를 목록에서 꺼냄
2. 빠져나온 문서의 중요도와 대기목록에 있는 나머지 문서의 중요도를 비교.
3. 만약 나머지 문서들중 중요도가 높은게 하나라도 있으면 지금 빠져나온 문서는 맨뒤로. (그렇지 않으면 인쇄)
```

**[2] 동작 방식 예**  
```
A(2) B(1) C(3) D(2)

1. A2 B1 C3 D2
2. B1 C3 D2 A2
3. C3 D2 A2 B1
4. D2 A2 B1 --> C3
5. A2 B1 --> D2
6. B1 --> A2
7. --> B1
```


## 코드
```js
// https://programmers.co.kr/learn/courses/30/lessons/42587
// 프린터
function solution(priorities, location) {
    let printCnt = 0; // 인쇄된 Cnt
    let docToFind = location; // 찾을 문서의 location (bak)

    while (priorities.length > 0) {
        const currPriority = priorities.shift();

        // filter를 활용하여 현재 꺼낸 문서의 우선순위보다 높은 문서가 있는지 체크
        const highPriorityExist = (priorities.filter((v) => v > currPriority).length > 0);

        if (highPriorityExist) // 있으면 다시 push..
            priorities.push(currPriority);
        else {
            // 현재 꺼낸 문서의 우선순위보다 높은 문서가 없을 경우 인쇄Cnt를 업뎃(인쇄함).
            printCnt++;

            // 현재 꺼낸 문서의 우선순위보다 높은 문서가 없을 뿐더러, 찾는 문서의 위치까지 맨 앞(0)이라면?
            // 인쇄cnt를 리턴!
            if (docToFind === 0)
                return printCnt;
        }

        // 위 if ~ else문에서 계속 문서를 꺼내긴하니까.. (if는 꺼냈다 넣고 else는 아예 꺼내고 printCnt 업뎃)
        // 찾을 문서의 location(docToFind)도 업데이트
        docToFind--;
        if (docToFind <= -1) 
            docToFind = priorities.length - 1;
    }

    return printCnt;
}
```

## 코드 (통과 실패)
```js
class PriorityClass {
    constructor(priority, idx) {
        this.priority = priority;
        this.idx = idx;
        this.status = 0; // 0은 아직 인쇄가 안된 상태.
    }
}

function solution(priorities, location) {
    // 먼저 배열 priorities에 들어있는 value들을 참고하여
    // value와 index위치를 함께 저장할 class를 생성
    const arrPriorityClass = priorities.map((v, i) => new PriorityClass(v, i));

    // arrPriorityClass의 item들의 status가 하나라도 0이면 계속 순회 (0이면 인쇄가 안된 상태!!)
    let nState = 0;
    while (arrPriorityClass.some((v) => !v.status)) {
        const arrPriorities = arrPriorityClass
            .filter((v) => v.status === 0)
            .map((v) => v.priority);

        const firstPriority = Math.max(...arrPriorities);
        const currItem = arrPriorityClass.shift();

        if (firstPriority <= currItem.priority) {
            nState++;
            currItem.status = nState;
        }
        arrPriorityClass.push(currItem);
    }

    return arrPriorityClass.find((v) => v.idx === location).status;
}
```



