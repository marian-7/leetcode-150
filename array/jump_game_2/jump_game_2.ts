export function jump(nums: number[]): number {
  let result = 0,
    left = 0,
    right = 0;

  while (right < nums.length - 1) {
    let farthest = 0;
    for (let i = left; i <= right; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }
    left = right + 1;
    right = farthest;
    result++;
  }

  return result;
}

/*
Explanation:
    To get the greedy solution and get O(n) we will start from
    the beginning of the array.
    This will be solved using BFS in one dimensional array.
    Our left and right pointer will show us range of elements
    where we can jump to from the previous section.
    For each of the numbers in that range we need to find
    which one can jump the farthest.
    Moving to the next section is setting left pointer to
    right plus one, and then setting right to farthest.
    Every time we need another range means we need to perform
    another jump, so we will increment our jump count.
*/
