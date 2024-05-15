export function canJump(nums: number[]): boolean {
  let position = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= position - i) {
      position = i;
    }
  }

  return position === 0;
}

/*
Explanation:
    We will start from the back of the array.
    Reason is that if we can get to index zero, that also means we can
    get to the last index.
    Complexity is O(n).
    We set our position (goal) variable as a moving target.
    That means we start from the last index.
    Looping from the array we check if we can get to our goal position
    from the current index, if we can that index becomes our
    new position (goal).
    At the end of the loop we will check if position is equal to 0 and
    return that.
*/
