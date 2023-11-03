//https://leetcode.com/problems/detect-capital/description/

var word = "USA"
var detectCapitalUse = function (word) {
    var lowerWord = word.toLowerCase();
    var len = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== lowerWord[i]) {
            len++;
        }
        if (word[0].toUpperCase() !== word[0] && len !== word.length) return false;

    }

    if (len == word.length) {
        return true;
    } else if (len === 0 || len === 1) {
        return true;
    } else if (len > 1 && len !== word.len) {
        return false;
    }
};