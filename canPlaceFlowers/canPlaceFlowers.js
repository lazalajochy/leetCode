//https://leetcode.com/problems/can-place-flowers/

var flowerbed = [1, 0, 0, 0, 1],
  n = 1; //true

function anPlaceFlowers(flowerbed, n) {
  var count = 0;
  var sum;
  if (n == 0) return true;
  if (flowerbed.length == 1 && flowerbed[0] == 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (i == 0) {
      if (flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
        flowerbed[i] = 1;
        count++;
      }
    } else {
      if (flowerbed[i] == 0 && flowerbed[i + 1] == 0 && flowerbed[i + 2] == 0) {
        flowerbed[i + 1] = 1;
        i = i + 1;
        count++;
      } else {
        if (flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
          sum = flowerbed.length - i;
          if (sum >= 2) {
            if (flowerbed[i - 1] !== 1) {
              flowerbed[i] = 1;
              count++;
            } else {
              if (flowerbed[i + 2] !== 1) {
                flowerbed[i + 1] = 1;
                count++;
              }
            }
          }
        }
      }
    }
    if (count == n) return true;
  }
  return false;
}

anPlaceFlowers(flowerbed, n);
