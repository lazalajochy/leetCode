//https://leetcode.com/problems/maximum-subarray/description/

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) {
  let sum = 0,
    aux = 0;
  if (nums.length == 1) return nums[0];

  let num = nums.filter((x) => x > 0);
  if (num.length == 0) {
    return Math.max(...nums);
  }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > aux) {
      aux = sum;
    } else {
      if (sum <= 0) {
        sum = 0;
      }
    }
  }

  return aux;
}
maxSubArray(nums);
