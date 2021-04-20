function solution(new_id) {
    var answer = '';
    const idlower = new_id.toLowerCase();
    const Rdf = RegExp(/[^0-9a-z._-\s]/gi);
    const second = idlower.replace(Rdf, "");
    const three = second.replace(/[.]+/gi,".");
    const stepfore = (temp) => {
        if(temp === "."){
            return " "
        }
        return temp.replace(/^[.]/gi,"").replace(/[.]$/gi,"");
    }
    const fore  = stepfore(three);
    const five = fore.replace(/^\s/gi,"a");
    const six = (Five) => {
    if(Five.length >= 16) {
        let temp = Five.substr(0,15);
        return temp.replace(/[.]$/gi,"");
    }
    return Five;
}

const seven = (Six) => {
    if(Six.length <= 2) {
        let temp = Six + Six[Six.length-1];
        return seven(temp);
    }
    return Six;
}
answer = answer + seven(six(five));
    return answer;
}

// 풀이 https://velog.io/@eamon3481/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%B4%88%EB%B3%B4-%EC%97%AC%ED%96%89%EA%B8%B0%EC%A0%95%EA%B7%9C%EC%8B%9D..-%EA%B7%B8%EA%B2%8C-%EB%AD%94%EB%8D%B0