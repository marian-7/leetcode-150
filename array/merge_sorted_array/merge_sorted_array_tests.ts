import { merge } from "./merge_sorted_array";

const test1 = () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const nums2 = [2, 5, 6];
  merge(nums1, 3, nums2, 3);
};

const test2 = () => {
  const nums1 = [1];
  const nums2: number[] = [];
  merge(nums1, 1, nums2, 0);
};

const test3 = () => {
  const nums1 = [0];
  const nums2 = [1];
  merge(nums1, 0, nums2, 1);
};

test1();
test2();
test3();
