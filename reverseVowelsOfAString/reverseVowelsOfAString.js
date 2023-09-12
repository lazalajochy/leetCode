//https://leetcode.com/problems/reverse-vowels-of-a-string/

var s = "hello";

reverseVowels(s);

function reverseVowels(s) {
  s = [...s];
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var letters = [];

  const result = s.filter((vowel) => {
    for (const letter of vowels) {
      if (vowel.includes(letter)) {
        letters.push(letter);
      }
    }
  });

  letters.reverse();

  var index = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      s[i] = letters[index];
      index++;
    }
  }

  return s.join("");
}
