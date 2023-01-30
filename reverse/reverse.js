var x = -2147483648;
reverse(x);

function reverse(x) {
  if (x === 0) return 0;
  x = [...x.toString()];
  let arr = [...x];
  x = parseInt(x.reverse().join(""));
  let bitLength = x.toString(2).length;

  if (bitLength > 31) return 0;

  if (arr[0] === "-") {
    let minus = arr[0];
    arr.shift();
    arr = arr.reverse().join("");
    return parseInt(`${minus}${arr}`);
  }

  if (arr[arr.length - 1] === "0") {
    arr.pop();
    return parseInt(arr.reverse().join(""));
  }

  return parseInt(arr.reverse().join(""));
}
