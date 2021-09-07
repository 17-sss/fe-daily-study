function solution(N, stages) {
 var answer = [];
 for (let i = 1; i <= N; i++) {
  let num = stages.length;
  stages = stages.filter((v) => v !== i);
  answer.push({ stage: i, falsy: (num - stages.length) / num });
 }

 return answer.sort((a, b) => b.falsy - a.falsy).map((v) => v.stage);
}
