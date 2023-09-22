//https://leetcode.com/problems/longest-palindromic-substring/description/
var s = "babad";

function longestPalindrome(s) {
  var longestPalindrome = "",
    reverseString = [...s],
    string = "";
  if (s === reverseString.reverse().join("")) {
    return s;
  }

  reverseString = "";

  for (let i = 0; i < s.length; i++) {
    reverseString = s[i];
    string = s[i];

    for (let j = i + 1; j < s.length; j++) {
      reverseString = s[j].concat(reverseString);
      string += s[j];

      if (string === reverseString) {
        string.length > longestPalindrome.length
          ? (longestPalindrome = string)
          : longestPalindrome;
      }
    }
    string = "";
    reverseString = "";
  }
  return longestPalindrome.length >= 1 ? longestPalindrome : s;
}

longestPalindrome(s);
