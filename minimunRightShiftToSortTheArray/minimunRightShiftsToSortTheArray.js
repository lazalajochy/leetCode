//https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/

var nums = [3, 4, 5, 1, 2];

var minimumRightShifts = function (nums) {
    let count = 0, n = 0, index = 0;
    while (index < nums.length) {
        if (nums[index] > nums[index + 1]) {
            let item = nums.pop();
            count++;
            nums.unshift(item);
            index = 0;
            n++;
        } else {
            index++;
        }

        if (n == nums.length) return -1;
    }

    return count

};