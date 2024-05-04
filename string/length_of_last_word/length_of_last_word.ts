export function lengthOfLastWord(s: string): number {
  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (length > 0 && s[i] === " ") {
      break;
    }
    if (s[i] !== " ") {
      length++;
    }
  }

  return length;
}

/*
Explanation:
    Only last word matters.
    We will start our loop at the end of the string.
    Our length count is 0.
    Everytime we have a character that is different from space,
    we will increase out length count by one.
    At the start of our loop code, we will check if current
    character is space and if our length count is bigger than 0.
    If that is the case, we know that we passed our last word
    and that we can break the loop because rest of the string
    doesn't matter.
*/
