import { lengthOfLastWord } from "./length_of_last_word";

const test1 = () => {
  const s = "Hello World";
  const length = lengthOfLastWord(s);
  console.log(`String: ${s}\nLast word length: ${length}`);
};

const test2 = () => {
  const s = "   fly me   to   the moon  ";
  const length = lengthOfLastWord(s);
  console.log(`String: ${s}\nLast word length: ${length}`);
};

const test3 = () => {
  const s = "luffy is still joyboy";
  const length = lengthOfLastWord(s);
  console.log(`String: ${s}\nLast word length: ${length}`);
};

const test4 = () => {
  const s = "a";
  const length = lengthOfLastWord(s);
  console.log(`String: ${s}\nLast word length: ${length}`);
};

test1();
test2();
test3();
test4();
