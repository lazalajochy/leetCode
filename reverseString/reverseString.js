//https://leetcode.com/problems/reverse-string/description/

var s = ["h", "e", "l", "l", "o"];

reverseString(s);

function reverseString(s) {
  for (let i = 0; i < s.length; i++) {
    let last = s.pop();
    s.splice(i, 0, last);
  }
}
