var maxSubArray = function (nums) {
  let max = nums[0];
  nums.forEach((s, i) => {
    let sum = 0;
    for (let e = i; e < nums.length; e++) {
      sum += nums[e];
      if (sum > max) max = sum;
    }
  });
  console.log(max);
};

const nums = [-2, 1];
//==================O(n2)======================//
// maxSubArray(nums);

var maxSubArray2 = function (nums) {
  let max = [];
  let idx = [];

  const dfs = (nums, i = 0, s = 0, num = 0) => {
    if (i === nums.length) return;

    if (nums[i] > num + nums[i]) {
      max.push(nums[i]);
      idx.push(i);
      return dfs(nums, i + 1, i, nums[i]);
    } else {
      max.push(num + nums[i]);
      idx.push(s);
      return dfs(nums, i + 1, s, num + nums[i]);
    }
  };

  dfs(nums);
  console.log(Math.max.apply(null, max));
};

maxSubArray2(nums);
