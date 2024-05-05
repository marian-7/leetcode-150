import { maxProfit } from "./best_time_to_buy_and_sell_stock";

const test1 = () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const profit = maxProfit(prices);
  console.log(`profit: ${profit}\nprices: ${prices.join(",")}`);
};

const test2 = () => {
  const prices = [7, 6, 4, 3, 1];
  const profit = maxProfit(prices);
  console.log(`profit: ${profit}\nprices: ${prices.join(",")}`);
};

const test3 = () => {
  const prices = [1, 2];
  const profit = maxProfit(prices);
  console.log(`profit: ${profit}\nprices: ${prices.join(",")}`);
};

test1();
test2();
test3();
