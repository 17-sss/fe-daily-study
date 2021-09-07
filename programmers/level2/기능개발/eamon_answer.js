const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  const day = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
// 남은 걸린 시간 (일단위)

  let StockWork = -1;
  // 초기에 1을 넣기위해 -1 을 넣었습니다.
  let ans = [];
  for (var i in day) {
    if (StockWork >= day[i]) {
        ans[ans.length - 1] += 1;
        //step 이 낮은 애가 더 오래걸릴경우 스택(?) 이 쌓입니다.
        
    } else {
      ans.push(1);
      StockWork = day[i];
      //그렇지 않을경우 
    }
  }

  return ans;
}

console.log(solution(progresses, speeds));
