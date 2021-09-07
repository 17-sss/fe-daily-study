## 어려웠던 점 & 요약

-   힌트는 DFS라 하셨지만 아직도 햇갈리고 모르겠습니다 ㅠㅠ
    -   언제쯤 알 수 있을까.. 정체구간 삐빅
-   힌트가 있음에도 불구하고, 모든 경우의 수를 구하기위해 삽질을 하고,  
    한번 엎었다가 또 다시 해봤는데  
    모든 경우의 수를 구하는 로직이 잘못되었네요..  
    더 이상 시간을 투자하긴 어려울 것 같아 미완성 코드라도 PR 보냅니다.
-   ~~언제쯤 풀려나요.. 이래서 제대로 하겠나.~~ 

## 코드 (미완성 코드)

```js
// https://programmers.co.kr/learn/courses/30/lessons/43165
// 메뉴 리뉴얼 (2021 KAKAO BLIND RECRUITMENT)

class Menu {
    createAllCase(orders, course) {
        // 모든 단품 메뉴
        const allMenu = orders
            .map((order) => order.split(''))
            .reduce((arrInit, arrCurr) => {
                arrInit.push(...arrCurr);
                return arrInit;
            }, [])
            .filter((str, idx, thisArr) => thisArr.indexOf(str) === idx)
            .sort();

        // 만들어질수 있는 세트메뉴의 모든 경우의 수를 구함 (모든 수를 다 찾진 못함.) [!!!!!!!!]
        const arrCase = [];
        course.forEach((c) => {
            for (let i = 0; i < allMenu.length; i++) {
                const val1 = allMenu[i];

                for (let j = i + 1; j < allMenu.length; j++) {
                    const val2 = [...Array(c - 1)].reduce((init, _, idx) => {
                        const currValue = allMenu[j + idx];

                        if (!currValue) return init;
                        return init + currValue;
                    }, '');
                    const pushItem = val1 + val2;
                    arrCase.indexOf(pushItem) <= -1 && arrCase.push(pushItem);
                }
            }
        });

        return arrCase;
    }

    createCourseObject(orders, course) {
        const answer = [];
        // 만들어질수 있는 세트메뉴의 모든 경우의 수를 구함
        const allCase = this.createAllCase(orders, course);
        // 만드려는 코스 요리를 담은 객체 초기화
        const courseObj = {};
        course.map((c) => (courseObj[c] = []));

        const arrSplitOrders = orders.map((v) => v.split(''));

        course.forEach((c) => {
            // 현재 코스 요리 길이 값(c) 기반으로 배열 allCase 필터링
            const arrCourseCase = allCase.filter((v) => v.length === c);
            const arrCourseCaseSplit = arrCourseCase.map((v) => v.split(''));

            arrCourseCaseSplit.forEach((courseCase) => {
                let courseCaseCnt = 0;
                arrSplitOrders.forEach((order) => {
                    const count = order.reduce((result, menu) => {
                        courseCase.indexOf(menu) > -1 && result++;
                        return result;
                    }, 0);
                    count === courseCase.length && courseCaseCnt++;
                });

                courseObj[c].push({
                    case: courseCase.join(''),
                    count: courseCaseCnt,
                });
            });
        });

        return courseObj;
    }
}

const solution = (orders, course) => {
    const menu = new Menu();
    const courseObject = menu.createCourseObject(orders, course);
    const result = [];

    course.forEach((c) => {
        const item = courseObject[c]
            .sort((a, b) => b.count - a.count)
            .filter((v, i, thisArr) => thisArr[0].count === v.count)
            .map((v) => v.case);
        result.push(...item);
    });
    return result;
};

solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);
```

## 웹에서 찾은 코드, 디버깅하면서 연구해봐야 할 코드

```js
//https://after-newmoon.tistory.com/98
function solution(orders, course) {
    const answer = course.reduce((arrResult, currCourseNum) => {
        let candidate = {};

        for (let i = 0; i < orders.length; i++) {
            if (orders[i] < currCourseNum) continue;

            combination(
                orders[i].split('').sort(),
                '',
                orders[i].length,
                currCourseNum,
                0,
                candidate,
            );
        }

        let menu = [];
        let mostOrdered = 0;
        for (let key in candidate) {
            let value = candidate[key];
            if (value > 1) {
                if (value > mostOrdered) {
                    mostOrdered = value;
                    menu = [key];
                } else if (value === mostOrdered) {
                    menu.push(key);
                }
            }
        }

        mostOrdered = 0;
        return [...arrResult, ...menu];
    }, []);

    function combination(
        arr,
        target,
        currStrOrderLength,
        courseNum,
        count,
        candidate,
    ) {
        if (courseNum === 0) {
            let cnt = candidate[target] || 0;
            candidate[target] = cnt + 1;
        } else if (currStrOrderLength === 0 || currStrOrderLength < courseNum)
            return;
        else {
            combination(
                arr,
                target + arr[count],
                currStrOrderLength - 1,
                courseNum - 1,
                count + 1,
                candidate,
            );
            combination(
                arr,
                target,
                currStrOrderLength - 1,
                courseNum,
                count + 1,
                candidate,
            );
        }
    }

    return answer.sort();
}

solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);
```
