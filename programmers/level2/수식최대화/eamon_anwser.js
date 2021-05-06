function solution(expression) {
  var answer = 0;
  const num = expression.split(/[\+\-\*]/gi);
  const express = expression.replace(/[0-9]/gi, "").split("");
  let sum = [];

  const cases = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];

  const BE = (nums, exp, c, i = 0) => {
    if (i === 3) {
      sum.push(Math.abs(nums));
      return;
    }
    const idx = exp.indexOf(c[i]);
    if (idx !== -1) {
      const arr = [
        ...nums.slice(0, idx),
        eval(nums[idx] + c[i] + nums[idx + 1]),
        ...nums.slice(idx + 2, nums.length),
      ];
      const newExp = exp.filter((v, i) => i !== idx);
      BE(arr, newExp, c, i);
    } else {
      i++;
      BE(nums, exp, c, i);
    }
  };
  cases.map((c) => BE(num, express, c));
  return Math.max.apply(null, sum);
}

const expression = "100-200*300-500+20";

solution(expression);
