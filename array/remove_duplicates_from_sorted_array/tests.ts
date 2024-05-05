import { removeDuplicates } from "./remove_duplicates_from_sorted_array";

const test1 = () => {
  const nums = [1, 1, 2];
  const k = removeDuplicates(nums);
  console.log(`k: ${k}\nnums: ${nums.join(",")}`);
};

const test2 = () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k = removeDuplicates(nums);
  console.log(`k: ${k}\nnums: ${nums.join(",")}`);
};

test1();
test2();
