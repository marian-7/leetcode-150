import { jump } from "./jump_game_2";

const test1 = () => {
  const nums = [2, 3, 1, 1, 4];
  const numberOfJumps = jump(nums);
  console.log(`nums: ${nums.join(",")}\njumps: ${numberOfJumps}`);
};

const test2 = () => {
  const nums = [2, 3, 0, 1, 4];
  const numberOfJumps = jump(nums);
  console.log(`nums: ${nums.join(",")}\njumps: ${numberOfJumps}`);
};

test1();
test2();
