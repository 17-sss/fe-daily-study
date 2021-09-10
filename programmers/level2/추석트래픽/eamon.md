
## 추석트래픽

- 자료구조 : stack 

- date 객체를 잘활용해야한다.
- 어려운문제는 아닌데 문제를 잘못 이해해서 생각보다 많이 걸림 
- lines에 담긴 숫자가 완료시간이라는 것을 못 읽고 시작시간이라는 것으로 문제를 품


## 문제풀이 순서

1. lines 에 들어오는 숫자를 파싱해서 { 시작 시간, 완료 시간} 으로 arr 에 push 해준다. 
2. 1초 범위에 들어오는 것들은 `범위의 시작라인` 보다는 `완료시간` 이 커야하고 `범위 의 끝라인` 이 `시작시간` 보다 커야한다.
3. 갯수를 세서 가장큰 것을 세어준다. 
4. 주의할것은 범위의 시작라인을 각 lines의 시작 시간으로 한 번 완료 시간으로 한번 설정해줘서 max 를 구해야한다는 점이다.

```js
function solution(lines) {
 var answer = 0;
 lines = lines.map((v) => v.split(' '));

 let arr = [];
 lines.forEach((v) => {
  let endTime = new Date(v[0] + ' ' + v[1]).getTime();
  let startTime = endTime - +v[2].slice(0, -1) * 1000;

  arr.push({ startTime, endTime });
 });
 // arr.sort((a,b) => a.startTime - b.startTime)

 let str;
 let end;
 let end_;
 let max = 0;

 for (let i = 0; i < arr.length; i++) {
  str = arr[i].startTime;
  end = arr[i].endTime - 1;
  let _len = arr.filter(
   (v) => v.startTime <= str + 999 && v.endTime >= str
  ).length;
  // console.log(arr)
  let len = arr.filter(
   (v) => v.startTime <= end + 999 && v.endTime >= end
  ).length;
  max = Math.max(max, _len, len);
 }

 return max;
}
```
