//https://leetcode.com/problems/spiral-matrix/

//      matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

function spiralOrder(matrix) {
  if (matrix.length == 0) return matrix[0];
  var output = [];
  var m = 0,
    column = 0,
    row = 0,
    leftRow = 0,
    columnUp = 0,
    rigthRow = 0,
    mines = 1,
    up = 0,
    left = 0;

  while (m < matrix.length * matrix.length) {
    if (row <= matrix[column].length - mines) {
      output.push(matrix[column][row]);
      row++;
    } else {
      if (column < matrix.length - mines) {
        column++;
        output.push(matrix[column][row - 1]);
        leftRow = row - 1;
      } else {
        if (leftRow > left) {
          leftRow--;
          output.push(matrix[column][leftRow]);
          columnUp = column - 1;
          rigthRow = leftRow;
        } else {
          if (columnUp > up) {
            output.push(matrix[columnUp][rigthRow]);
            columnUp--;
          } else {
            column = columnUp + 1;
            row = rigthRow + 1;
            mines++;
            up++;
            left++;
          }
        }
      }

      if (output.length == matrix[0].length * matrix.length) break;
    }
  }
  return output;
}

spiralOrder(matrix);
