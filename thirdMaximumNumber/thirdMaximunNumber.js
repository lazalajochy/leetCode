//https://leetcode.com/problems/third-maximum-number/description/

var nums = [3, 2, 1];

thirdMax(nums);

function thirdMax(nums) {
  nums = new Set(nums);
  nums = [...nums];
  if (nums.length < 3) {
    return Math.max(...nums);
  }

  nums = nums.sort((a, b) => b - a);

  return nums[2];
}
