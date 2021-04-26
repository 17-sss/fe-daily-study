function solution(strings, n) {
  let result = strings.map((v) => v[n]).sort();
  let arr = [];

  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (result[i] === strings[j][n]) {
        arr.push(strings[j]);
      }
    }
  }

  // indexOf = 우선적으로 값이 위치하고있는 index를 반환 ex) [1,2,3,1,4,2] 에서 1,2 를 검색하면 0 과 1 을 반환 뒤는 무시
  return [...new Set(arr)].sort((a, b) => {
    if (a[n] > b[n]) return a - b;
    if (a[n] < b[n]) return b - a;
    if (a[n] === b[n]) return a.localeCompare(b);
  });
}

// 1단계
/*
    n번째에 있는 문자를 기준으로 배열을 만든다.
*/

// 2단계
/*
    n번째에 있는 문자를 가지고 있는 string을 arr 배열에 순서대로 넣어준다.
*/

// 3단계
/*
    반복되는 배열을 Set를 통해 걸러준 후 sort 메소드를 통해서 정렬
*/
