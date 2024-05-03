import { removeElement } from "./remove_element";

const test1 = () => {
  const nums = [3, 2, 2, 3];
  const val = 3;
  const k = removeElement(nums, val);
  console.log(`k: ${k}\nnums: ${nums.join(",")}\nval: ${val}`);
};

const test2 = () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;
  const k = removeElement(nums, val);
  console.log(`k: ${k}\nnums: ${nums.join(",")}\nval: ${val}`);
};

test1();
test2();
