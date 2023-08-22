//https://leetcode.com/problems/first-letter-to-appear-twice/description/

var s = 'abccbaacz';
repeatedCharacter(s);

function repeatedCharacter(s) {
    var index, letter, aux = Infinity;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] == s[j]) {
                index = j
                if (index < aux) {
                    aux = index;
                    letter = s[i]
                }

            }
        }
    };

    letter
}