// //https://leetcode.com/problems/reverse-integer/
var x = -2147483648;
reverse(x);

function reverse(x) {
  if (x === 0) return 0;
  x = [...x.toString()];
  let arr = [...x];
  x = parseInt(x.reverse().join(""));
  let bitLength = x.toString(2).length;

  if (bitLength > 31) return 0;

}
