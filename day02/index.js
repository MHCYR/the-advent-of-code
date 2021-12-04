const path = require("path");
const fs = require("fs");

const movesArr = fs
  .readFileSync(path.join(__dirname, "day02.txt"), "utf8")
  .toString()
  .split("\n");
/*
// PART 1
let horizontal = 0;
let vertical = 0;

movesArr.forEach((move) => {
  const moveArr = move.split(" ");
  const direction = moveArr[0];
  const value = Number(moveArr[1]);
  if (direction === "forward") {
    horizontal += value;
  } else if (direction === "up") {
    vertical -= value;
  } else {
    vertical += value;
  }
});
console.log(horizontal * vertical);
*/

// PART 2
let horizontal = 0;
let vertical = 0;
let aim = 0;
movesArr.forEach((move) => {
  const moveArr = move.split(" ");
  const direction = moveArr[0];
  const value = Number(moveArr[1]);
  if (direction === "forward") {
    horizontal += value;
    vertical += aim * value;
  } else if (direction === "up") {
    aim -= value;
  } else {
    aim += value;
  }
});
console.log(horizontal * vertical);
