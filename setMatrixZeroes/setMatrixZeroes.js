//https://leetcode.com/problems/set-matrix-zeroes/description/

var matrix = [[1,1,1],[1,0,1],[1,1,1]]


var setZeroes = function (matrix) {
    var columnArr = [], rowArr = [];

    var leng = 0;


    for (let i = 0; i < matrix.length; i++) {
        leng++
        for (let j = 0; j < matrix[i].length; j++) {
            leng++;
            if (matrix[i][j] == 0) {
                columnArr.push(i)
                rowArr.push(j)
            }
        }
    }

    if (columnArr.length > 0) {
        let len = 0, index = 0;
        while (len < columnArr.length) {
            let columnn = columnArr[index]
            let row = rowArr[index];
            let left = row + 1;
            let rigth = row - 1;
            let up = columnn - 1;
            let down = columnn + 1;

            let n = 0

            while (n < leng) {
                if (left < matrix[0].length) {
                    matrix[columnn][left] = 0
                    left++;
                }

                if (rigth >= 0) {
                    matrix[columnn][rigth] = 0;
                    rigth--;
                }

                if (down < matrix.length) {
                    matrix[down][row] = 0;
                    down++;
                }

                if (up >= 0) {
                    matrix[up][row] = 0;
                    up--;
                }
                n++;
            }
            len++;
            index++;
        }
    }
    return matrix
};