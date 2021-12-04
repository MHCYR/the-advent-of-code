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
