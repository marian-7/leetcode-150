export function hIndex(citations: number[]): number {
  const n = citations.length;
  let h = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
}

/*
Explanation:
    The sorting step allows us to transform the problem 
    into a linear scan to find the maximum h. 
    By checking the condition citations[i] >= i + 1, 
    we effectively find the highest number of papers that 
    have at least that number of citations. This method 
    ensures we accurately calculate the h-index in an 
    efficient manner.
*/
