//https://leetcode.com/problems/two-sum/

var nums = [2, 7, 11, 15],
  target = 9;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        if (nums[i] + nums[j] === target) return [i, j];
      }
    }
  }
};
