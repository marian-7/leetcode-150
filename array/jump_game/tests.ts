import { canJump } from "./jump_game";

const test1 = () => {
  const nums = [2, 3, 1, 1, 4];
  const isJumpPossible = canJump(nums);
  console.log(`${nums.join(",")}\ncanJump: ${isJumpPossible}`);
};

const test2 = () => {
  const nums = [3, 2, 1, 0, 4];
  const isJumpPossible = canJump(nums);
  console.log(`${nums.join(",")}\ncanJump: ${isJumpPossible}`);
};

const test3 = () => {
  const nums = [2, 0];
  const isJumpPossible = canJump(nums);
  console.log(`${nums.join(",")}\ncanJump: ${isJumpPossible}`);
};

const test4 = () => {
  const nums = [2, 5, 0, 0];
  const isJumpPossible = canJump(nums);
  console.log(`${nums.join(",")}\ncanJump: ${isJumpPossible}`);
};

test1();
test2();
test3();
test4();
