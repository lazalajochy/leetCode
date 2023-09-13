//https://leetcode.com/problems/distribute-candies/description/

var candyType = [1, 1, 2, 2, 3, 3]; //3

distributeCandies(candyType);

function distributeCandies(candyType) {
  var allowedCandies = candyType.length / 2;
  candyType = new Set(candyType);
  candyType = [...candyType];

  var result = 0;

  for (let i = 0; i < candyType.length; i++) {
    if (result < allowedCandies) {
      result++;
    }
  }

  return result;
}
