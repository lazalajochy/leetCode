//https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description/

var nums = [1,2,3]

var maximumTripletValue = function (nums) {
    var sum = 0, aux = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sum = nums[i] - nums[j]
                sum = sum * nums[k];
                if (aux < sum) aux = sum;
            }
        }
    }

    return aux

};