## 알고리즘 기초 다지기 프로젝트 (feat. 코드없는 프로그래밍) [2021년 07월 05일]

### **1.** Leetcode - Decode WaysMax SubArray Sum

[문제: LeetCode - 91. Decode Ways](https://leetcode.com/problems/decode-ways/)

**문제 요약**

-   들어오는 숫자로 된 문자열을 디코딩 하는 방법의 갯수를 계산하는 문제

**코드 및 풀이**

-   코드 : 통과 성공 / 참고함.. 너무 어려움 :(

    ```js
    const numDecodings = (s) => {
        const strSize = s.length;
        if (strSize === 0) return 0;

        const numSet = new Set();
        for (let i = 1; i <= 26; i++) numSet.add(i.toString());

        const result = Array(strSize).fill(null);

        const oneChar = s[strSize - 1];
        result[strSize - 1] = Number(numSet.has(oneChar));

        const twoChar = s[strSize - 2] + s[strSize - 1];
        result[strSize - 2] =
            (numSet.has(s[strSize - 2]) ? result[strSize - 1] : 0) +
            Number(numSet.has(twoChar));

        for (let i = strSize - 3; i >= 0; i--) {
            let tmp = 0;
            if (numSet.has(s[i])) tmp += result[i + 1];
            if (numSet.has(s[i] + s[i + 1])) tmp += result[i + 2];
            result[i] = tmp;
        }

        return result[0];
    };

    numDecodings('232425'); // 8
    ```

-   풀이

    **>** 먼저 들어오는 숫자로 이루어진 문자열의 길이가 0이라면 만들 수 있는 디코딩 케이스가 없으니 0 반환
    ```js
    const numDecodings = (s) => {
        const strSize = s.length;
        if (strSize === 0) return 0;
    ```

    **>** 숫자로 인해 변환되는 알파벳은 그저 페이크인듯. 쓸모없음. Set으로 1~26 범위까지 만들어주기.
    ```js
        const numSet = new Set();
        for (let i = 1; i <= 26; i++) numSet.add(i.toString());
    ```

    **>** 숫자열(숫자로 이루어진 문자열)의 길이만큼 null이 들어간 배열을 만들어줌.
    ```js
        const result = Array(strSize).fill(null);
    ```

    **>** Bottom-up 방식으로 디코딩 케이스 (카운팅) 계산
    ```js
        // 1) 맨 뒤 첫글자가 디코딩이 되는지 확인. 디코딩된다면 result[strSize - 1] 위치의 값에 1 대입.
        const oneChar = s[strSize - 1];
        result[strSize - 1] = Number(numSet.has(oneChar));

        // 2) 맨 뒤 두글자 계산
        const twoChar = s[strSize - 2] + s[strSize - 1];
        result[strSize - 2] =
            // 2-1) strSize - 2 위치의 숫자가 numSet에 존재한다면 맨 뒤 첫글자의 디코딩 케이스 값을 대입. 
            //      아니라면 0 (0일 경우는 strSize - 2 위치의 문자가 "0"이 아니라면 해당됨)
            (numSet.has(s[strSize - 2]) ? result[strSize - 1] : 0) +
            Number(numSet.has(twoChar)); // 2-2) 맨 뒤 두글자가 디코딩이 되는지 확인.
                                         //      디코딩된다면 1을 추가하여 2-1) 의 값과 더하여 result[strSize - 2]에 대입.


        // 3) 맨 뒤 첫글자 & 두글자의 디코딩 케이스는 계산했으니 그 값들을 기반으로
            //  나머지 글자의 디코딩케이스를 계산하여 result 배열에 i 위치에 대입
        for (let i = strSize - 3; i >= 0; i--) {
            let tmp = 0;
            if (numSet.has(s[i])) tmp += result[i + 1];
            if (numSet.has(s[i] + s[i + 1])) tmp += result[i + 2];
            result[i] = tmp;
        }

        return result[0];
    };

    numDecodings('232425'); // 8
    ```

### **2.** Leetcode - Max SubArray Sum

[문제: LeetCode - 53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

**문제 요약**

-   주어진 배열 (nums)에서 제일 큰 SubArray를 계산의 합을 계산

**코드 및 풀이**

-   코드 : 통과 성공

    ```js
    const maxSubArray = (nums) => {
        const sumValues = [];

        let nPivot = 0;
        while (nums.length > nPivot) {
            let sumValue = nums[nPivot];

            const prevSumValue = sumValues[nPivot - 1];
            if (prevSumValue) {
                const prevCurrSum = prevSumValue + sumValue;
                sumValue = Math.max(sumValue, prevCurrSum);
            }
            sumValues.push(sumValue);
            nPivot++;
        }

        return Math.max(...sumValues);
    }

    maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
    ```

-   풀이

    **>** subArray들의 값을 저장할 배열 `sumValues` 생성
    ```js
    const maxSubArray = (nums) => {
        const sumValues = [];
    ```

    **>** 주어진 매개변수 `nums`를 순회하면서 subArray들의 합을 계산 후 제일 큰 값 retrun
    ```js
        let nPivot = 0;
        while (nums.length > nPivot) {
            // 1) 현재 순회위치의 값 (nums - num)
            //  만약 배열 sumValues이 비어있을 시엔 (nPivot - 1 위치에 값이 없을 때) 
            //  아래 if문 들어가지 않고 sumValues에 push 함. 그래서 변수명이 sumValue
            let sumValue = nums[nPivot];

            // 2) 직전 sum 값 + 현재 값과 현재 값을 비교해서 더 큰 값을 sumValue로 확정!
            const prevSumValue = sumValues[nPivot - 1];
            if (prevSumValue) {
                const prevCurrSum = prevSumValue + sumValue;
                sumValue = Math.max(sumValue, prevCurrSum);
            }
            sumValues.push(sumValue);
            nPivot++;
        }

        return Math.max(...sumValues);
    }

    maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
    ```

**추가 코드 : 최종 SubArray의 정보 & 제일 큰 값 Return**

-   코드

    ```js
    const getResultSubArray = (nums, arrSubArrayInfo, finalMaxVal) => {
        const resultItemIdx = arrSubArrayInfo.findIndex(({ maxVal }) => maxVal === finalMaxVal);
        const resultItem = arrSubArrayInfo[resultItemIdx];
        return nums.slice(resultItem.startIdx, (resultItemIdx + 1));
    }

    const maxSubArray = (nums) => {
        const arrSubArrayInfo = [];

        let nPivot = 0;
        while (nums.length > nPivot) {
            const currInput = nums[nPivot];
            const subArrayInfo = { startIdx: nPivot, maxVal: currInput };

            const prevSubArrayInfo = arrSubArrayInfo[nPivot - 1];
            if (prevSubArrayInfo) {
                const { maxVal: prevMaxVal, startIdx: prevStartIdx } = prevSubArrayInfo;
                const prevCurrInput = prevMaxVal + currInput;

                subArrayInfo.maxVal = Math.max(currInput, prevCurrInput);
                if (subArrayInfo.maxVal === prevCurrInput)
                    subArrayInfo.startIdx = prevStartIdx;
            }

            arrSubArrayInfo.push(subArrayInfo);
            nPivot++;
        }
        const finalMaxVal = Math.max(...arrSubArrayInfo.map(({ maxVal }) => maxVal));
        const resultSubArray = getResultSubArray(nums, arrSubArrayInfo, finalMaxVal);

        return { finalMaxVal, resultSubArray };
    };

    maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // { finalMaxVal: 6, resultSubArray: [4,-1,2,1] }
    ```