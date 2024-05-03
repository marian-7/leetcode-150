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
