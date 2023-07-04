//https://leetcode.com/problems/3sum-closest/submissions/985758114/


var nums = [1, 1, 1, 1], target = 4;

function threeSumCloset(nums, target) {
    var restult = 0, sumDistance, previousSum = Infinity, sum;
    for (let i = 0; i < nums.length; i++) {
        let closetSum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            closetSum += nums[j]
            sum = closetSum;
            for (let k = j + 1; k < nums.length; k++) {
                closetSum += nums[k];
                sumDistance = Math.abs(closetSum - target);
                if (sumDistance < previousSum) {
                    restult = closetSum;
                    previousSum = sumDistance;
                }
                closetSum = sum;
            }
            closetSum = nums[i];
        }
    }
    return restult;
}
const result = threeSumCloset(nums, target);
console.log(result)