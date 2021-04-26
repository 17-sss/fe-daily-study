```
function solution(N, stages) {
    // Array.from({length:N}) === new Array(N).fill(1)

    return new Array(N).fill(1)
    .map((v,i) => {
        let length = stages.length;
        stages = stages.filter(v => v > i+1);
        return {i:i+1, fail:(length-stages.length)/stages.length}
    })
    .sort((a,b) => a.fail===b.fail ? a.i-b.i : b.fail-a.fail)
    .map(v => v.i);
}
```

#### N 크기의 배열을 만들어주자!

```
1. Array.from({length:N}) === 2. new Array(N).fill(1)

output
1 => [undefined, undefined, undefined, undefined, undefined, ... N]
2 => [empty * N]
```

2번의 경우 <code>fill</code>로 배열을 채워주어야 수정이 가능하다.

```
.map((v,i) => {
        let length = stages.length;
        stages = stages.filter(v => v > i+1);
        return {i:i+1, fail:(length-stages.length)/stages.length}
    })
```

실패율을 구하기 위해서는 <code>(전체 수 - 스테이지를 클리어한사람의 수) / 전체 수</code> 이다.
따라서 length는 전체 수 stages는 스테이지를 클리어한 사람의 수 이다.

```
.sort((a,b) => a.fail===b.fail ? a.i-b.i : b.fail-a.fail)
```

실패율이 같을 경우엔 숫자가 스테이지가 낮은 순번이 앞으로 오게 된다. 그 외엔 실패율이 높은 스테이지가 앞에 위치하게 된다.
