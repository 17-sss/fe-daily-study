/*
21.05.17
d의 요소들을 합쳐서 budget을 넘지않는 부서가 가장 많은 조합을 구하고,
가장 많은 부서(요소)를 가진 조합을 골라 '몇 개의 부서까지 지원이 가능한지 부서의 갯수'를 리턴한다.

첫번쨰 시도 (실패)
- 요소들의 합 <= budget
- 모든 요소들의 합을 구해 sum으로 저장한다.
- 내림차순으로 정렬한 후, sum에서 큰 숫자를 하나씩 뺴면서 budget과 비교한다.
- 가장 작은애들한테 많이 줘야 많은 부서들한테 줄 수 있다.
- sum이 budget과 같거나 작아지는 순간 배열의 길이를 반환한다.
*/
function solution(d, budget) {
    let answer;
    const sum = d.reduce((acc, el) => acc += el, 0);
    d = d.sort((a, b) => a - b);

    if (sum === budget) return d.length;

    for(let i = 0; i < d.length; i++){
        const left = budget - d[i];
        if(left < d[i]) {
            answer = d.length - (i + 1);
            console.log(answer)
            return;
        }
    }
    return answer;
}

/*
두번쨰 시도 (성공)
- d를 오름차순으로 정렬한다.
- 현재값이 예산보다 커지는 순간, 지금까지 뺀 갯수들을 반환한다.
*/

function solution(d, budget) {
    let answer = 0;
    d = d.sort((a, b) => a - b);

    for(let i = 0; i < d.length; i++){
        budget = budget - d[i];
        if(budget < 0) {
            break;
        }
        answer++;
    }
    return answer;
}

/*
세번째 시도 (성공)
풀이 공유 이후로 filter를 사용해서 다시 시도해봄.
*/

function solution(d, budget) {
    d = d.sort((a, b) => a - b).filter(el => {
        if (budget >= el) {
            budget -= el;
            return true;
        }
    })
    return d.length;
}

/* 테스트 케이스 */
console.log(solution([1, 3, 2, 5, 4], 9));//3
console.log(solution([2,2,3,3], 10));//4


// 오늘 배운 점: for문 사용시 break 전후 값이 어떻게 바뀌는 지에 대해 유의하면서 사용해야한다. 좀 더 많은 연습 필요.