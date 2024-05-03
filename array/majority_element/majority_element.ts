export function majorityElement(nums: number[]): number {
  let majorityNumber = nums[0];
  let majorityCount = 1;

  for (let i = 1; i < nums.length; i++) {
    const currentNumber = nums[i];

    if (currentNumber !== majorityNumber) {
      majorityCount--;
      if (majorityCount < 0) {
        majorityNumber = currentNumber;
        majorityCount = 1;
      }
    } else {
      majorityCount++;
    }
  }

  return majorityNumber;
}

/*
Explanation:
    Initial idea might be to track all occurrences of all numbers in the array.
    That approach is not wrong, and it will pass all test cases.
    However, it won't allow us to have O(1) space efficiency.
    To do that we will use Boyer-Moore Voting majority algorithm.
    Since question says that we will always have majority element in the array this
    algorithm will work, otherwise there could be cases when it fails.
    We will keep track of majorityNumber (at start this will be first number of
    the array) and majorityCount.
    We will iterate through the array. If number at index i is same as
    majorityNumber we will increment count.
    If number is different we will decrement majorityCount.
    When majorityCount falls below zero, we will put current number as
    majorityNumber and set majorityCount at 1.
    This might seem weird at first, but it will work because we are
    guaranteed a majority number in our array.
    Majority number is number that appears more than n/2 times which means
    it will always override all others number in the array.
    You can test this by shuffling array number however you want.
*/
