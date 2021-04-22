## 요약

주어진 문자열을 정규 표현식을 활용하여 변환하는 문제 입니다!

**풀이**

```javascript
function solution(new_id) {
  // 단계 1. 대문자 => 소문자
  new_id = new_id.toLowerCase();
  // 단계 2. 조건에 맞지 않는 문자 제거
  new_id = new_id.replace(/[^a-z\d\-\_\.]/g, "");
  // 단계 3. '.'이 2개 이상 등장할 경우 '.' 1개로 변경
  new_id = new_id.replace(/\.+\./g, ".");
  // 단계 4. 맨 앞 혹은 맨 뒤에 '.'가 있다면 제거
  new_id = new_id.replace(/^\.|\.$/g, "");
  // 단계 5. 길이가 0인 경우 'a' 할당
  if (new_id.length === 0) new_id = "a";
  // 단계 6. 길이가 15 초과하는 경우 15까지로 재할당
  new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/, "");
  // 단계 7. 길이가 3이하라면 마지막 문자를 반복해서 더하기
  while (new_id.length < 3) new_id += new_id[new_id.length - 1];
  return new_id;
}
```

**코드**

```javascript
function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z\d\-\_\.]/g, "")
    .replace(/\.+\./g, ".")
    .replace(/^\.|\.$/g, "")
    .slice(0, 15)
    .replace(/\.$/, "");
  if (new_id.length === 0) new_id = "a";
  while (new_id.length < 3) new_id += new_id[new_id.length - 1];
  return new_id;
}
```
