/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let i = m - 1;
  let j = n - 1;

  for (let k = m + n - 1; k >= 0; k--) {
    if (j < 0 || nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else if (i < 0 || nums1[i] < nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    }
  }

  console.log(nums1);
}

/*
Explanation:
    We want to loop through the array just once.
    nums1 is array that will always have 0 at the end so that we have enough space in it to store both arrays.
    Looping only through nums1 array will go through all the numbers in both arrays.
    We will add 1 pointer for each array. Each pointer start at the end of their respected array.
    Since arrays are sorted we know that first number in both arrays will be the biggest number in that array.
    Which every number is larger we will put it to the end of nums1 array. After that we will reduce pointer
    for array associated with that number.
    Other condition to look after is checking if our pointer has fallen bellow zero, if it is that means
    we don't want to check that array anymore.
    If you try accessing index out of bounce in LeetCode submission you will encounter an error even though
    your code runs errorless on your local machine.
    We have merged sorted array.
*/
