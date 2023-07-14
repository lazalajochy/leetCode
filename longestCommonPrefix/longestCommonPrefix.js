//https://leetcode.com/problems/longest-common-prefix/


var strs = ["flower", "flow", "flight"];

function longestCommonPrefix(strs) {

    if (strs.length == 1) return strs[0];

    var result = '';

    for (let i = 0; i < strs.length; i++) {
        var firstWord = strs[i], count = 1, previousPrefix = '';
        for (let j = 0; j < strs.length; j++) {
            var secondWord = strs[j], prefix = '';
            if (i !== j) {
                for (let k = 0; k < firstWord.length; k++) {
                    if (firstWord[k] === secondWord[k]) {
                        prefix += firstWord[k];
                    } else {
                        break
                    }
                }

                if (previousPrefix == '' && prefix !== '') {
                    previousPrefix = prefix;
                    count++;
                } else {
                    if (prefix !== '' && previousPrefix !== '') {
                        if (previousPrefix === prefix) count++;

                    }
                }
            }
        }
        (count == strs.length) ? result = previousPrefix : result
    }
    return result;
};

longestCommonPrefix(strs);