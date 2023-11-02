//https://leetcode.com/problems/valid-anagram/


var s = "anagram", t = "nagaram";

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    var str = "";
    t = [...t];
    for (let i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            str += s[i];
            let index = t.indexOf(s[i]);
            t.splice(index, 1)
        }
    }
    return str === s
};