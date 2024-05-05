import { rotate } from "./rotate_array";

const test1 = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  console.log(`nums before: ${nums.join(",")}\n k: ${k}`);
  rotate(nums, k);
  console.log(`nums after: ${nums.join(",")}`);
};

const test2 = () => {
  const nums = [-1, -100, 3, 99];
  const k = 2;
  console.log(`nums before: ${nums.join(",")}\n k: ${k}`);
  rotate(nums, k);
  console.log(`nums after: ${nums.join(",")}`);
};

const test3 = () => {
  const nums = [-1];
  const k = 2;
  console.log(`nums before: ${nums.join(",")}\n k: ${k}`);
  rotate(nums, k);
  console.log(`nums after: ${nums.join(",")}`);
};

const test4 = () => {
  const nums = [-1, -100, 3, 99];
  const k = 3;
  console.log(`nums before: ${nums.join(",")}\n k: ${k}`);
  rotate(nums, k);
  console.log(`nums after: ${nums.join(",")}`);
};

test1();
test2();
test3();
test4();
