//https://leetcode.com/problems/median-of-two-sorted-arrays/description/
var nums1 = ([0, 0].nums2 = [0, 0]);

var findMedianSortedArrays = function (nums1, nums2) {
    var arr = nums1.concat(nums2).sort((a, b) => a - b);
    var n1 = 0,
        n2 = 0,
        result;
    if (arr.length % 2 === 0) {
        n1 = Math.floor(arr.length / 2 - 1);
        n2 = Math.floor(arr.length / 2 - 1 + 1);
        result = (arr[n1] + arr[n2]) / 2;
    } else {
        n1 = Math.floor(arr.length / 2);
        n1 = arr[n1];
    }
    return result !== undefined ? result : n1;
};
