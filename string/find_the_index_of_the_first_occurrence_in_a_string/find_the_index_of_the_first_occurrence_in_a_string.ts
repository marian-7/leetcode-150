export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    for (let n = 0; n < needle.length; n++) {
      if (needle[n] !== haystack[i + n]) {
        break;
      }
      if (n === needle.length - 1) {
        return i;
      }
    }
  }

  return -1;
}

/*
Explanation:
    Lopping through our haystack.
    Each iteration we will start inner loop that goes through our needle.
    Inner loop will compare each needle character at index n with
    each haystack character at index n + i (i is index of the current
    character of the outer loop).
    If one of the characters is different from the needle, we will break the
    inner loop and go to the next character of the outer loop.
    If we manage to go through entire inner loop without braking, that means
    we found our needle, we can return i (index of the current character
    of the outer loop).
    Finishing outer loop means that there were no occurrences of the needle
    in the haystack, so we can safely return -1.
*/
