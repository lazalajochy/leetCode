//https://leetcode.com/problems/happy-number/submissions/

var n = 2;
isHappy(n);

function isHappy(n) {
  let str = n.toString(),
    result = 0,
    arr = [];

  let index = 0;
  for (let i = 0; i < str.length; ) {
    x = str[index];
    result += parseInt(str[index] * str[index]);
    index++;

    if (index >= str.length) {
      str = result.toString();
      index = 0;
      if (result == 1) return true;
      if (!arr.includes(result)) {
        arr.push(result);
      } else {
        return false;
      }
      result = 0;
    }
  }
}
