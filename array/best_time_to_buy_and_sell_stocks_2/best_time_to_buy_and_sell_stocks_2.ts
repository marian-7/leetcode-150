export function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
}

/*
Explanation:
    We will do daily trading here.
    Since in this task we can "predict the future", we can check
    if price on next day will be greater than today.
    Looping through the array from index 1 (because at index 0 there
    is no previous day that we would use to compare).
    If price at current index is greater than the price on
    index - 1 (previous day) than we know that we should have
    bought stocks yesterday and sell them today.
    So we will just add the difference between today and yesterday
    to our profit.
*/
