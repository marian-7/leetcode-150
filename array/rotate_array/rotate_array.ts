/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  k = k % nums.length;

  const reverse = (start: number, end: number) => {
    let l = start;
    let r = end;
    while (l < r) {
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    }
  };

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

/*
Explanation:
    One way to do this is creating another array where we will save all values
    moved by k steps.
    To implement a solution with O(1) memory we will have to take different
    approach.
    The way to do it is by reversing array couple of times.
    First reverse will be done on the whole array.
    Second will be done on first part of the array (from 0 to k-1).
    Third will be done on last part of the array (from k to length-1).

    Example:
      - initial array: [1,2,3,4,5,6,7] k = 3
      - first reverse: [1,2,3,4,5,6,7] -> [7,6,5,4,3,2,1]
        - first part of the array: [7,6,5]
        - last part of the array: [4,3,2,1]
      - second reverse: [7,6,5] -> [5,6,7]
      - third reverse: [4,3,2,1] -> [1,2,3,4]
      - final array: [5,6,7,1,2,3,4]
*/
