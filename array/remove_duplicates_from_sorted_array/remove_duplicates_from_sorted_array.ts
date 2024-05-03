export function removeDuplicates(nums: number[]): number {
  let uniqIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[uniqIndex] !== nums[i]) {
      nums[uniqIndex + 1] = nums[i];
      uniqIndex++;
    }
  }
  return uniqIndex + 1;
}

/*
Explanation:
    It is not actually important to remove these numbers from the array.
    Important is to keep them out of first k elements.
    We are adding uniq index number that starts from 0.
    Iterating through array. Starting from index 1 since first number cannot be duplicate.
    Every time that number is not equal to number on uniq index we will add it to
    new uniq index (uniq index + one).
    After interation only non-duplicate numbers will be in first uniqIndex + 1 elements.
    Returning uniqIndex + one will be number of elements that are not duplicates.
*/
