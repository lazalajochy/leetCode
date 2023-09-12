//https://leetcode.com/problems/intersection-of-two-arrays/description/

var nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

intersection(nums1, nums2);

function intersection(nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);

  nums1 = [...nums1];
  nums2 = [...nums2];

  var result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        result.push(nums1[i]);
        break;
      }
    }
  }

  return result;
}
