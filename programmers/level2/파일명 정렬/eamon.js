function solution(files) {
  var answer = [];
  let headRex = new RegExp(/^[^\d]+/, "gi");
  let numRex = new RegExp(/^[\d]+/, "gi");
  //header 와 number 를 가려내는 정규표현식 
  let idx = 0;
  // 들어온 순서를 파악하기 위한 idx
  for (const file of files) {
    const head = file.match(headRex);
    const number = file.replace(headRex, "").match(numRex);
    const tail = file.replace(headRex, "").replace(numRex, "")
    // 문제에 tail 이나와서 만들었지만 실제로 쓰진 않음
    answer.push({
      title: head[0].toLowerCase(),
      number: +number[0],
      idx,
      file,
    });
    // answer 객체에 header, number , idx 를 넣고 sort 해줄 예정
    idx++;
  }

  answer.sort((a, b) => {
    if (a.title === b.title) {
        // header 가 같으면 
      if (b.number === a.number) {
          //number 도 같으면
        return a.idx - b.idx;
        // 들어온 순서 인덱스로 sort
      } else return a.number - b.number;
      // number 로 sort
    }
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    // header 사전 순서 sort
  });

  return answer.map((v) => v.file);
  // file 원본 string 빼내기
}
