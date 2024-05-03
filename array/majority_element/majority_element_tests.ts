import { majorityElement } from "./majority_element";

const test1 = () => {
  const nums = [3, 2, 3];
  const result = majorityElement(nums);
  console.log(`Input: ${nums.join(",")} Result: ${result}`);
};

const test2 = () => {
  const nums = [2, 2, 1, 1, 1, 2, 2];
  const result = majorityElement(nums);
  console.log(`Input: ${nums.join(",")} Result: ${result}`);
};

test1();
test2();
