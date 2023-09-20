//https://leetcode.com/problems/longest-harmonious-subsequence/

var nums = [1, 3, 2, 2, 5, 2, 3, 7];

function findLHS(nums) {
  var num1,
    num2,
    result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - nums[i + 1]) == 1) {
      num1 = nums[i];
      num2 = nums[i + 1];

      var item1 = nums.filter((x) => x == num1);
      var item2 = nums.filter((x) => x == num2);

      item1.length + item2.length > result
        ? (result = item1.length + item2.length)
        : result;
    }
  }

  return result;
}

findLHS(nums);
