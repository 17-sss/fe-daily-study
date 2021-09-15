function solution(s) {
  var answer = 0;
  if (s.length === 1) return 1;
  const dfs = (n) => {
    let j = 0;
    let i = n;
    let e = 2 * n;
    let stack = 1;
    let before = s.slice(j, i);
    let result = "";
    while (i < s.length + n) {
      if (before === s.slice(i, e)) {
        stack += 1;
      } else {
        if (stack !== 1) {
          result += `${stack}` + before;
          stack = 1;
        } else {
          result += before;
        }

        before = s.slice(i, e);
      }

      j += n;
      i += n;
      e += n;
    }
    return result.length;
  };
  let min = Infinity;
  for (let i = 1; i < s.length; i++) {
    min = Math.min(min, dfs(i));
  }

  //문자열 압축? 스택?
  //정규식?

  //문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현

  //문자가 반복되지 않아 한번만 나타난 경우 1은 생략함

  //이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다. dfs?
  // n개 단위로 잘라서 압축하는 함수 작성. -> 스택이용

  return min;
}
