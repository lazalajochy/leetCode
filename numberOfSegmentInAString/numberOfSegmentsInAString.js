
//https://leetcode.com/problems/number-of-segments-in-a-string/

var s = "Hello, my name is John";
var countSegments = function (s) {
    s = s.trim();
    if (s.length === 0) return 0
    var len = [], str = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            str += s[i];
        } else {
            if (str !== "") len.push(str);
            str = ""
        }
    }
    return len.length + 1

};