//https://leetcode.com/problems/maximum-product-subarray/
var nums = [2, 3, -2, 4];

maxProduct(nums);

function maxProduct(nums) {
  let previousValue = 0,
    result = 0;
  if (nums.length == 1) return console.log(nums[0]);
  var max = Math.max(...nums);
  for (let i = 0; i < nums.length; i++) {
    previousValue = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      previousValue *= nums[j];
      if (previousValue > result) {
        result = previousValue;
      }
    }
  }
  max > result ? (result = max) : result;
  return result;
}
