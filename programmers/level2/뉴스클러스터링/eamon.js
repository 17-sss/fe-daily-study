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
 let map2 = {};

 j = 0;
 i = 2;
 while (j < str2.length) {
  if (str2.slice(j, i).match(/[a-z]/gi)) {
   if (str2.slice(j, i).match(/[a-z]/gi).length == 2) {
    if (map2[str2.slice(j, i)]) {
     map2[str2.slice(j, i)] += 1;
    } else {
     map2[str2.slice(j, i)] = 1;
    }
   }
  }
  j++;
  i++;
 }

 const AuB = { ...map, ...map2 };

 let maplen = Object.keys(map).length;
 let maplen2 = Object.keys(map2).length;

 const keys = maplen > maplen2 ? Object.keys(map) : Object.keys(map2);
 let AnB = {};
 for (const key of keys) {
  if (map[key] !== undefined && map2[key] !== undefined) {
   AnB[key] = Math.min(map[key], map2[key]);
   AuB[key] = Math.max(map[key], map2[key]);
  }
 }
 const AuBCnt = Object.values(AuB).reduce((acc, cur) => {
  return (acc += cur);
 }, 0);
 const AnBCnt = Object.values(AnB).reduce((acc, cur) => {
  return (acc += cur);
 }, 0);
 console.log(map, map2, AuB, AnB);

 if (AuBCnt === 0) return 65536;
 return Math.floor(65536 * (AnBCnt / AuBCnt));
}
