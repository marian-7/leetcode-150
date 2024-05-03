export function removeElement(nums: number[], val: number): number {
  let nonValIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[nonValIndex] = nums[i];
      nonValIndex++;
    }
  }
  return nonValIndex;
}

/*
Explanation:
    It is not actually important to remove these numbers from the array.
    Important is to keep them out of first k elements.
    We are adding index number that starts from 0.
    Iterating through array.
    Every time that number is not equal to value we will set it on index element
    that our variable represents.
    Our pointer will always be in front of the non-value index.
    After interation only non-value numbers will be in first k elements.
    Returning index will be number of elements that is different from value (k).
*/
