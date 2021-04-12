## 요약

sort 함수를 이용하여 대소관계를 비교하면 수월하게 접근할 수 있습니다.

**sort**

```javascript
// 두 문자열을 정순과 역순으로 합친 값을 비교하며 내림차순 정렬
answer.sort((a, b) => a + b > b + a ? -1 : 1);
// 숫자로 비교하게 되면 3, 9와 9, 3은 같은 결과가 나오므로 높은 값인 9가 앞으로 정렬되지 않고 3, 9가 유지되게 됩니다.

// 이후 a + b와 b + a를 비교합니다.
a + b > b + a
// 결국 두 문자열을 합친 값 중 큰 값의 선두에 해당하는 원소가 앞에 오게 됩니다.
// 만약 a와 b의 각 자릿수를 비교하는 방식으로 접근하면 되면 sort 내부에서 매 자릿수의 값에 대한 비교가 필요합니다.
// 예)
// answer.sort((a, b) => a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : ...);
```

**풀이**

```javascript
function solution(numbers) {
  // 주어진 Number 배열을 String 배열로 변환
  const answer = numbers.map(v => '' + v);
  answer.sort((a, b) => a + b > b + a ? -1 : 1);
  // answer[0]이 1보다 크다면 (가장 큰 값이 0보다 크다면) 뒤의 자릿 수도 유효하므로 전체를 반환,
  // 그렇지 않다면 '0'을 반환!
  return answer[0] > 1 ? answer.join('') : '0';
}
```

**코드**

```javascript
const solution = numbers => numbers.sort((a, b) => '' + a + b > '' + b + a ? -1 : 1) && numbers[0] > 1 ? numbers.join('') : '0';
```
