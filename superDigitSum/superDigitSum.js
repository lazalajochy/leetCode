//https://www.hackerrank.com/challenges/recursive-digit-sum/problem?isFullScreen=true

var n = "148",
  k = 3;
function superDigit(n, k) {
  const sumDigits = (str) => {
    return str.split("").reduce((acc, digit) => acc + parseInt(digit), 0);
  };
  const calculateSuperDigit = (str) => {
    if (str.length === 1) {
      return parseInt(str);
    }

    const digitSum = sumDigits(str);
    return calculateSuperDigit(digitSum.toString());
  };

  const repeatedDigitSum = sumDigits(n) * k;
  return calculateSuperDigit(repeatedDigitSum.toString());
}

superDigit(n, k);
