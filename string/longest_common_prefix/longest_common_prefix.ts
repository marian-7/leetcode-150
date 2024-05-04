export function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  const firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    for (let s = 1; s < strs.length; s++) {
      if (i === strs[s].length || strs[s][i] !== firstWord[i]) {
        return prefix;
      }
    }
    prefix += firstWord[i];
  }

  return prefix;
}

/*
Explanation:
    We will take first word of the array. You can pick a
    different one, it doesn't matter which one we pick.
    Worst case scenario is that we loop through number of characters
    in the shortest string * (number of words - 1).
    After picking a word, in our case first one, we will loop through
    characters of that word.
    Inside of that loop, we will loop through remaining array of words.
    In each iteration we will check if character at current index (index of
    the chosen word for iteration) is different from the character at that
    index in our chosen word (first word in our case).
    We will also check if index is out of bounce for that word.
    If ether of these conditions is true, we will return our prefix.
    If we iterate through all words without conditions being true,
    we will add that character to out prefix variable.
*/
