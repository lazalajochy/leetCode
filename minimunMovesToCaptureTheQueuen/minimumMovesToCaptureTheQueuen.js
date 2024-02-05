var a = 1,
  b = 1; // --> rock steps

var c = 8,
  d = 8; //--> last steps

var e = 2,
  f = 3; //--> queuen position

minimunSteps(a, b, c, d, e, f);

//https://leetcode.com/problems/minimum-moves-to-capture-the-queen/description/

function minimunSteps(a, b, c, d, e, f) {
  a--;
  b--;
  c--;
  d--;
  e--;
  f--;

  var dashboard = [];
  for (let i = 0; i < 8; i++) {
    dashboard.push(new Array(8).fill(0));
  }


  //starting position of all the elements;
  dashboard[a][b] = "R"; //columns

  dashboard[c][d] = "X"; //Queuen

  dashboard[e][f] = "Q"; //diagonals

  var start = false;

  var countColumns = 0;

  var previousC = c,
    countDiagonal = 0,
    previousD = d;

  while (!start) {
    var diagonal = true;

    if (a > e) {
      a--;
      dashboard[a][b] = "R";
      countColumns++;
    }

    if (e > a) {
      a++;
      dashboard[a][b] = "R";
      countColumns++;
    }

    if (a == e) {
      if (b > f && Math.abs(b - f) > 1) {
        b--;
        dashboard[a][b] = "R";
        countColumns++;
      }

      if (f > b && Math.abs(b - f) > 1) {
        b++;
        dashboard[a][b] = "R";
        countColumns++;
      }
    }

    if (c > e) {
      c--;
      d--;
      dashboard[c][d] = "X";
      countDiagonal++;
      diagonal = false;
    }

    if (e > c) {
      c++;
      d++;
      dashboard[c][d] = "X";
      countDiagonal++;
      diagonal = false;
    }

    if (diagonal) {
      if (e == c && d == f) {
        return console.log(Math.min(countDiagonal - 1, countColumns));
      } else {
        if (previousC > e) {
          c = previousC - 1;
          previousC = c;
          d = previousD;
          dashboard[c][d] = "X";
          countDiagonal = 0;
          countDiagonal++;
        } else {
          c = previousC + 1;
          previousC = c;
          countDiagonal = 0;
          d = previousD;
          dashboard[c][d] = "X";
          countDiagonal++;
        }
      }
    }
  }
}
