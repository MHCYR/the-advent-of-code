// FIRST PART
let path = require("path");
let fs = require("fs");

let nums = fs
  .readFileSync(path.join(__dirname, "day01.txt"), "utf8")
  .toString()
  .split("\n")
  .map((num) => Number(num));

let count = 0;
nums.forEach((curr, i) => {
  if (i < nums.length - 1) {
    let next = nums[i + 1];
    if (curr < next) count++;
  }
});
console.log(count);

// SECOND PART
let reducedNums = [];
nums.forEach((first, i) => {
  if (i < nums.length - 2) {
    let second = nums[i + 1];
    let third = nums[i + 2];
    reducedNums.push(first + second + third);
  }
});

let count2 = 0;
reducedNums.forEach((curr, i) => {
  if (i < reducedNums.length - 1) {
    let next = reducedNums[i + 1];
    if (curr < next) count2++;
  }
});
console.log(count2);
