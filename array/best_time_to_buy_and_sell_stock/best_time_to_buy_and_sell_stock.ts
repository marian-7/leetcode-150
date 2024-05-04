export function maxProfit(prices: number[]): number {
  let lowestPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const priceToday = prices[i];
    const profitForToday = priceToday - lowestPrice;

    if (profitForToday > maxProfit) {
      maxProfit = profitForToday;
    }

    if (lowestPrice > priceToday) {
      lowestPrice = priceToday;
    }
  }

  return maxProfit;
}

/*
Explanation:
    We will loop through the array only once.
    First we will set our lowestPrice to price of the first day and
    our maxProfit to 0, since we haven't bought anything yet.
    On every iteration we will check 2 things:
    - is current price lower than our lowest price so far?
    - would profit from today be larger than our current max profit?
    Finishing the loop will result with having max profit possible.
*/
