import { hIndex } from './h_index';

const test1 = () => {
  const citations = [3, 0, 6, 1, 5];
  const h = hIndex(citations);
  console.log(`citations: ${citations.join(', ')}\nh-index: ${h}`);
};

const test2 = () => {
  const citations = [1, 3, 1];
  const h = hIndex(citations);
  console.log(`citations: ${citations.join(', ')}\nh-index: ${h}`);
};

test1();
test2();
