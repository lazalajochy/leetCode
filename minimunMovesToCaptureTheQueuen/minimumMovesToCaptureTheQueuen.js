var a = 1,
b = 1; // --> rock position

var c = 8,
d = 8; //--> bishops position

var e = 2,
f = 3; //--> queuen position

minimunSteps(a, b, c, d, e, f);

//note---> is not completed yet
//https://leetcode.com/problems/minimum-moves-to-capture-the-queen/description/

function minimunSteps(a, b, c, d, e, f) {
debugger;
a--;
b--;
c--;
d--;
e--;
f--;

var dashboard = Array.from({ length: 8 }, () => new Array(8).fill(0));

dashboard[a][b] = "R"; //Rocks position
dashboard[c][d] = "B"; //Bishops position
dashboard[e][f] = "Q"; //Queuen position

let start = false;

let rocksSteps = 0,
  bishopsSteps = 0,
  placeDiagonalPossition = false;

while (!start) {
  let isCompleted = true;

  if (a > e && dashboard[a - 1][b] == 0) {
    a--;
    dashboard[a][b] = "R";
    rocksSteps++;
  }

  if (e > a && dashboard[a + 1][b] == 0) {
    a++;
    dashboard[a][b] = "R";
    rocksSteps++;
  }

  if (a == e) {
    if (b > f && dashboard[a][b + 1] == 0) {
      b--;
      dashboard[a][b] = "R";
      rocksSteps++;
    }

    if (f > b && dashboard[a][b + 1] == 0) {
      b++;
      dashboard[a][b] = "R";
      rocksSteps++;
    }
  }

  //---> diagonal moves
if(!placeDiagonalPossition){
  placeDiagonalPossition = true;
  switch (e) {
    case 0:
      c = 7;
      bishopsSteps++;
      break;
    case 1:
      c = 6;
      bishopsSteps++;
      break;
    case 2:
      c = 5;
      bishopsSteps++;
      break;
    case 3:
      c = 4;
      bishopsSteps++;
      break;
    case 4:
      c = 3;
      bishopsSteps++;
      break;
    case 5:
      c = 2;
      bishopsSteps++;
      break;
    case 6:
      c = 1;
      bishopsSteps++;
      break
    case 7:
      c = 0;
      bishopsSteps++;
      break
    default:
      break;
  }
}

  dashboard[c][d] = "B";

  if(d > f && dashboard[c][d-1] == 0){
    d--;
    c--
    isCompleted = false;
  }

  if(f > d && dashboard[c][d+1] == 0){
    d++;
    c++
    isCompleted = false
  }

  if (isCompleted)
    return console.log(Math.min(rocksSteps, bishopsSteps));
}
}