## 어려웠던 점 & 요약

-   재밌어보여서 골랐는데, LV2라 약간 어려울 줄 알았는데 비교적 쉬웠습니다!

## 풀이

```js
const solution = (n, words) => {
    // 먼저 말했던 단어와 사람의 순서를 저장하기 위한 배열을 선언.
    const useWords = [];
    // 처음 사람의 순서는 무조건 1 !
    let personNum = 1;
    // 첫 글자와 마지막 글자를 저장하는 변수 선언
    let startChar, endChar;

    // words는 순서대로 돌아감 (words 배열 순서대로 끝말잇기함)
    for (let i = 0; i < words.length; i++) {
        // 현재 word
        const word = words[i];
        // 현재 word의 첫 글자
        startChar = word[0];

        // dupFlag - useWords 배열에 이미 말했던 단어가 있는지 확인
        const dupFlag = useWords.findIndex((v) => v.word === word) > -1;

        // 현재 사람의 순서와 말한 단어를 useWords에 객체로 push
        useWords.push({ personNum, word });

        // 1) 첫 글자와 마지막 글자가 있음과 동시에
            // 전 사람이 말했던 단어의 마지막 글자와 현재 사람이 말하고있는 첫 글자를 비교하여 일치하지 않을 경우
        // 2) dupFlag가 true일 경우
        if ((startChar && endChar && startChar !== endChar) || dupFlag) {
            // 현재 turn(차례)를 구해준 뒤, 현재 사람의 순번과 함께 return
            // 차례는.. 현재 사람이 몇번 말했는지 카운팅하면 됌!!
            const turn = useWords.filter((v) => v.personNum === personNum)
                .length;
            return [personNum, turn];
        }

        // 만약 최대 인원 수와 personNum이 같다면 1로 초기화 | 아니라면 ++
        if (personNum === n) personNum = 1;
        else personNum++;

        // 다음 사람의 첫 글자와 비교해야 할 현재 사람이 말한 단어의 마지막 글자 업뎃!
        endChar = word[word.length - 1];
    }

    return [0, 0];
};
```

## 코드 (통과 성공)

```js
// https://programmers.co.kr/learn/courses/30/lessons/12981
// 영어 끝말잇기

// 1차시, 통과 성공
const solution = (n, words) => {
    const useWords = [];
    let personNum = 1;
    let startChar, endChar;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        startChar = word[0];

        const dupFlag = useWords.findIndex((v) => v.word === word) > -1;
        useWords.push({ personNum, word });

        if ((startChar && endChar && startChar !== endChar) || dupFlag) {
            const turn = useWords.filter((v) => v.personNum === personNum)
                .length;
            return [personNum, turn];
        }

        if (personNum === n) personNum = 1;
        else personNum++;

        endChar = word[word.length - 1];
    }

    return [0, 0];
};

solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
]);
solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
]);
solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']);
```
