function solution(str1, str2) {
  var answer = 0;

  //return answer;
  // 스트링 정규식?
  let map = {};
  let sum = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let j = 0;
  let i = 2;
  let maxLen = Math.max(str2.length, str1.length);

  while (j < str1.length) {
    if (str1.slice(j, i).match(/[a-z]/gi)) {
      if (str1.slice(j, i).match(/[a-z]/gi).length == 2) {
        if (map[str1.slice(j, i)]) {
          map[str1.slice(j, i)] += 1;
        } else {
          map[str1.slice(j, i)] = 1;
        }
      }
    }

    j++;
    i++;
  }
  let map2 = { ...map };

  j = 0;
  i = 2;
  while (j < str2.length) {
    if (str2.slice(j, i).match(/[a-z]/gi)) {
      if (str2.slice(j, i).match(/[a-z]/gi).length == 2) {
        if (map[str2.slice(j, i)]) {
          map[str2.slice(j, i)] += 1;
          if (sum[str2.slice(j, i)]) {
            if (map2[str2.slice(j, i)] > sum[str2.slice(j, i)]) {
              sum[str2.slice(j, i)] += 1;
            }
          } else {
            sum[str2.slice(j, i)] = 1;
          }
        } else {
          map[str2.slice(j, i)] = 1;
        }
      }
    }
    j++;
    i++;
  }

  const AuB = Object.values(map).reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  const AnB = Object.values(sum).reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  console.log(map, map2, sum, AnB, AuB);

  if (AuB === 0) return 65536;
  return Math.floor((65536 * AnB) / (AuB - AnB));
}
