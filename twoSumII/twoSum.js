//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum == target) {
            return [left + 1, right + 1];
            } else {
                (sum < target) ? left++ : right--;
        }
    }  
    
};