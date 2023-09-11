//https://leetcode.com/problems/first-missing-positive/

//var nums = [1, 2, 0];

var nums = [3, 4, -1, 1];
//  var nums = [0, 2, 2, 1, 1];

function firstMissingPositive(nums) {
    debugger
    /* nums = nums.filter((x) => x >= 0)
     nums.sort((a, b) => a - b);
     var min = Math.min(...nums), max = Math.max(...nums);
 
     var arr = nums.filter((value, index, self) => {
         return self.indexOf(value) === index;
     });
 
     if (min > 1) return console.log(1);
 
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] !== min) return min;
         min++;
     }
 
     return console.log(max + 1)*/

    const set = new Set(nums);
    let min = 1;
    while (set.has(min)) {
        min++;
    }
    return min;

}

const result = firstMissingPositive(nums)
