### programmers level.1 신규 아이디 추천
#### 문제 + 정규표현식 간단한 정리: https://velog.io/@grinding_hannah/AlgorithmJavaScript-%EC%8B%A0%EA%B7%9C-%EC%95%84%EC%9D%B4%EB%94%94-%EC%B6%94%EC%B2%9C


#### 제출답변:
```js
function solution(new_id) {
    //1단계, 2단계
    new_id = new_id.toLowerCase().replace(/[^a-z\d\-\_\.]/g, "");
    //3단계
    new_id = new_id.replace(/\.+\./g, '.');
    //4단계 - / 는 or을 나타냄
    new_id = new_id.replace(/^\.|\.$/g, "");
    //5단계
    if(new_id === '') new_id = "a";
    //6단계
    if(new_id.length >= 16) {
        //ew_id = new_id.replace(/a-z/g, "")
        new_id = new_id.slice(0, 15).replace(/\.$/g, '');
    //7단계
    }
    if(new_id.length <= 2) {
            const lastLetter = new_id[new_id.length - 1];
            const requiredCount = 3 - new_id.length;
            for(let i = 0; i < requiredCount; i++){
                new_id += lastLetter;
            }
    }
    return new_id;
}
```
#### 기억할 점:
- `str` + `str` 은 `join()`보다 `+=`을 사용하기
- `str.slice(0, 15)`는 앞에서부터 15글자를 반환, `str.slice(0, -1)`은 마지막 글자를 빼고 반환

정규표현식 문법 정리하고 안 보고 풀 수 있을 때까지 연습할 것!