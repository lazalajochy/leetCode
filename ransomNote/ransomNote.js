//https://leetcode.com/problems/ransom-note/
var ransomNote = "a", magazine = "b";
var canConstruct = function (ransomNote, magazine) {
    var string = "";
    magazine = [...magazine];
    for (let i = 0; i < ransomNote.length; i++) {
        for (var j = 0; j < magazine.length; j++) {
            if (ransomNote[i] === magazine[j]) {
                string += magazine[j];
                magazine.splice(j, 1);
                break;
            }
        }
    }
    return string === ransomNote;
};