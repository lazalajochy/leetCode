//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
var s = "pwwkew";
lengthOfLongestSubstring(s);

function lengthOfLongestSubstring(s) {
    let result = 0,
        arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
        let index = i;
        for (let j = i + 1; j < s.length; j++) {
            if (j - index <= 1) {
                if (!arr.includes(s[j])) arr.push(s[j]), (index = j);
            } else {
                break;
            }
        }

        arr.length > result ? (result = arr.length) : (result = result);
        arr = [];
    }
    return result;
}