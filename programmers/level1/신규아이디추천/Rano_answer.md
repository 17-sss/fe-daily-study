## 어려웠던 점 & 회고
- 예전에 풀어봤던 것이지만, 다시 풀어봐도 정규표현식을 사용하게 되네요.  
    예전에 풀었을 땐 정규표현식의 괄호가 캡쳐링 그룹인지도 모르고 막 썼었네요..  
    비교해보니 바꾼건 많지 않으나, 예전 코드에 비해 약 1ms 빨라졌슴다!

## 코드 (통과 성공)
```js
// https://programmers.co.kr/learn/courses/30/lessons/72410
// 카카오 2021 코딩테스트 - 신규 아이디 추천
/* 
    [1] 문제 메모
        1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
        2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
        3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
        4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
        5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
        6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
            만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
        7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
*/

// 1차시, 통과 성공 (2021.04.20)
function solution(new_id) {
    new_id = new_id.toLowerCase()           // 1
        .replace(/[^0-9a-z_.\-]/g, '')      // 2
        .replace(/\.{2,}/g, '.')            // 3
        .replace(/^\.|\.$/g, '');           // 4    ( ^\. 는 문자열 시작에 .(점) 이 있는지 체크 )
                                            //      ( \.$ 는 문자열 끝에 .(점)이 있는지 체크 )
    if (!new_id)    new_id = "a";           // 5
    if (new_id.length > 15) {               // 6
        new_id = new_id.substr(0, 15);
        new_id = new_id.replace(/\.$/, '');
    }
    if (new_id.length < 3) {                // 7
        while(new_id.length < 3)
            new_id += new_id[new_id.length-1];
    }

    return new_id;
}

solution("...!@BaT#*..y.abcdefghijklm");    // "...!@BaT#*..y.abcdefghijklm"
solution("z-+.^.");                         // "z--"
solution("=.=");                            // "aaa"
solution("123_.def");                       // "123_.def"
solution("abcdefghijklmn.p");               // "abcdefghijklmn"
```