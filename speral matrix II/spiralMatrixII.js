//https://leetcode.com/problems/spiral-matrix-ii/
var generateMatrix = function (n) {
    var index = 0;
    var matrix = [];
    for (let i = 0; i < n; i++) {
        let arr = [];
        arr = new Array(n);
        matrix.push(arr)
    };

    var column = 0, row = 0, rowRest = 0, auxRow = 1, auxColumn = 1;

    var columnDown = 1;

    var rowRigth = n - 2;

    var leftRow = n - 2;


    var x = 2;
    var columnUp = n - x;

    while (index < n * n) {
        if (row < n - rowRest) {
            index++;
            matrix[column][row] = index;
            row++;
        } else {
            if (columnDown < n - rowRest) {
                index++;
                let rowDown = row - 1
                matrix[columnDown][rowDown] = index;
                columnDown++;
            } else {
                if (leftRow >= column) {
                    index++;
                    let columnRigth = columnDown - 1;
                    matrix[columnRigth][leftRow] = index;
                    leftRow--;
                } else {
                    if (columnUp > column) {
                        index++;
                        let up = leftRow + 1
                        matrix[columnUp][up] = index;
                        columnUp--;
                    } else {
                        row = auxRow;
                        auxRow++;
                        column++;
                        rowRest++;
                        columnDown = column + 1;
                        x++;
                        rowRigth = n - x;
                        leftRow = n - x;
                        columnUp = n - x;

                    }
                }
            }
        }
    }
    return matrix;
};