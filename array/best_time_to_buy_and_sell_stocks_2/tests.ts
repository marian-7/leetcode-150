import { maxProfit } from "./best_time_to_buy_and_sell_stocks_2";

const test1 = () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const profit = maxProfit(prices);
  console.log(`prices: ${prices.join(",")}\nprofit: ${profit}`);
};

const test2 = () => {
  const prices = [1, 2, 3, 4, 5];
  const profit = maxProfit(prices);
  console.log(`prices: ${prices.join(",")}\nprofit: ${profit}`);
};

const test3 = () => {
  const prices = [7, 6, 4, 3, 1];
  const profit = maxProfit(prices);
  console.log(`prices: ${prices.join(",")}\nprofit: ${profit}`);
};

test1();
test2();
test3();
