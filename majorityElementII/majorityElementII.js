//https://leetcode.com/problems/majority-element-ii/description/

var nums = [3, 2, 3];

function majorityElement(nums) {
    var n = Math.floor(nums.length / 3);
    var arr = [], len = 0, index = 0, count = 0;
    while (len < nums.length) {
        if (!arr.includes(nums[len])) {
            if (index < nums.length) {
                if (nums[index] == nums[len]) {
                    count++;
                }
            } else {
                if (count > n) {
                    arr.push(nums[len])
                }
                len++
                count = 0;
                index = 0;
            }

        } else {
            len++
            index = 0;
        }
        index++
    }
    return arr
}

majorityElement(nums);