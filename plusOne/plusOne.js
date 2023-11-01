//https://leetcode.com/problems/plus-one/submissions/1088817978/

var plusOne = function(digits) {
    var n = digits.join("");
    n = BigInt(n)
    n++
    n = n.toString();
    n = [...n]
    return n;  
};