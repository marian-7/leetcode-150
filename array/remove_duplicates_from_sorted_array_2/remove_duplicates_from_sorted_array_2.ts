export function removeDuplicates(nums: number[]): number {
  let l = 0,
    r = 0;

  while (r < nums.length) {
    let occurrenceCount = 1;

    while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
      r++;
      occurrenceCount++;
    }

    for (let i = 0; i < Math.min(2, occurrenceCount); i++) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }

  return l;
}

/*
Explanation:
    We will have 2 pointers, called left and right, both with initial value 0.
    We will loop through the array until our right pointers gets out
    of bounce.
    Each time we will check set inner loop that will skip all the duplicate
    numbers if current number is same as the next one, right pointer
    increases each time that is the case.
    At this point we know how much duplicates there is for current number.
    For loop will be 1 or 2 items long. If there is no duplicates, it will be 1,
    if there are duplicates (doesn't matter how many of them), it will be 2.
    We will set number at our left index, to number on our right index each
    time we pass the loop. (increasing left pointer each iteration)
    After we finish our for loop, we will increment our right pointer
    and continue the main loop.
*/
