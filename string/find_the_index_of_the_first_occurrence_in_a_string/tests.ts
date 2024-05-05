import { strStr } from "./find_the_index_of_the_first_occurrence_in_a_string";

const test1 = () => {
  const haystack = "sadbutsad";
  const needle = "sad";
  const index = strStr(haystack, needle);
  console.log(`Haystack: ${haystack}\nNeedle: ${needle}\nIndex: ${index}`);
};

const test2 = () => {
  const haystack = "leetcode";
  const needle = "leeto";
  const index = strStr(haystack, needle);
  console.log(`Haystack: ${haystack}\nNeedle: ${needle}\nIndex: ${index}`);
};

test1();
test2();
