//https://leetcode.com/problems/longest-consecutive-sequence/

var nums = [100, 4, 200, 1, 3, 2];

longestConsecutive(nums);

function longestConsecutive(nums) {
  nums = new Set(nums);
  nums = [...nums];
  nums = nums.sort((a, b) => a - b);
  var result = 1,
    aux = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] == 1) {
      result++;
    } else {
      if (result >= aux) aux = result;
      result = 1;
    }
  }
  if (aux > result) result = aux;
  if (nums.length == 0) return 0;
  return console.log(result);
}
