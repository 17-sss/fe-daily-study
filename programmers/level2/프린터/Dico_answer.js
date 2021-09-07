//미완!! 내림차순으로 다시 구현해볼 것!!

/*
priorities 배열을 한 번 순회하면서 { idx : __, val : __ } 형태로 저장한 후 temp = []에 객체들을 넣는다.
temp를 순회하면서 가장 앞 요소의 val보다 높은 val이 있는 지 검사:(현재 요소에 "order"가 없다면 if문 진입)
1) 있다면 temp를 shift()(첫번째 요소를 빼서)해서 sorted에 push()(맨 뒤에 추가)
2) 없다면 answer[i]["order"] = order; 로 저장.
정렬이 되고 나면 location 과 idx값이 일치하는 요소를 찾아서 그 요소의 order를 반환.
*/
//첫번째 시도(정정 필요)
function solution(priorities, location) {
    const sorted = [];

    const temp = priorities.map((el, i) => {
        return {
            "idx" : i,
            "val": el
        }
    });
    //{"idx" : i, "val": el}
    temp.forEach((print, i) => {
        const firstElVal = print.val;
        const fromSecond2Last = temp.slice(i + 1, temp.length - 1); //첫번째 요소를 제외한 나머지 요소

        //더 큰 priority를 가진 요소가 있다면
        if (fromSecond2Last.find(obj => obj.val > firstElVal)){
            const firstEl = temp.shift();
            temp.push(firstEl);
        } else {
            //현재 요소가 가장 큰 priority를 가졌다면
            const firstEl = temp.shift()
            sorted.push(firstEl);
        }
        console.log("i", i);
        console.log("temp:", temp);
        console.log("sorted:", sorted);
    })
}


//test cases
solution([2, 1, 3, 2], 2); //1
// solution([1, 1, 9, 1, 1, 1], 0); //5