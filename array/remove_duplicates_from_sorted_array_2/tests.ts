import { removeDuplicates } from "./remove_duplicates_from_sorted_array_2";

const test1 = () => {
  const nums = [1, 1, 1, 2, 2, 3];
  const k = removeDuplicates(nums);
  console.log(`nums: ${nums.join(",")}\nk: ${k}`);
};

const test2 = () => {
  const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  const k = removeDuplicates(nums);
  console.log(`nums: ${nums.join(",")}\nk: ${k}`);
};

test1();
test2();
