function solution(table, languages, preference) {
  var answer = "";
  const map = {};
  table.forEach((v) => {
    const list = v.split(" ");
    const job = list[0];
    let i = 1;
    while (i < list.length) {
      if (map[list[i]]) {
        map[list[i]] = [...map[list[i]], [job, 6 - i]];
      } else {
        map[list[i]] = [[job, 6 - i]];
      }
      i++;
    }
  });
  let result = {};
  languages.forEach((v, i) => {
    map[v].forEach((v) => {
      if (result[v[0]]) {
        result[v[0]] += v[1] * preference[i];
      } else {
        result[v[0]] = v[1] * preference[i];
      }
    });
  });
  const getMax = (object) => {
    return Object.keys(object).filter((x) => {
      return object[x] == Math.max.apply(null, Object.values(object));
    });
  };

  return getMax(result).sort()[0];
}
