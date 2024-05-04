import { longestCommonPrefix } from "./longest_common_prefix";

const test1 = () => {
  const words = ["flower", "flow", "flight"];
  const prefix = longestCommonPrefix(words);
  console.log(`Words: ${words.join(",")}\nPrefix: ${prefix}`);
};

const test2 = () => {
  const words = ["dog", "racecar", "car"];
  const prefix = longestCommonPrefix(words);
  console.log(`Words: ${words.join(",")}\nPrefix: ${prefix}`);
};

test1();
test2();
