export function romanToInt(s: string): number {
  const symbolValue: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const nextIndex = i + 1;
    const current = symbolValue[s[i]];

    if (nextIndex === s.length || current >= symbolValue[s[nextIndex]]) {
      result += current;
    } else {
      result -= current;
    }
  }

  return result;
}

/*
Explanation:
    There are two things that we need to know here:
    - roman numbers go from largest to smallest number
    - there can only be one smaller number before larger number

    When we know these rules this problem becomes pretty trivial.
    If current number is larger than the next one, we add it to
    our total.
    If current number is smaller than the next one, we subtract
    it from out total.
    After looping once through the whole array, we will have
    integer version of the roman number.
*/
