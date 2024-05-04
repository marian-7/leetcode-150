import { romanToInt } from "./roman_to_integer";

const test1 = () => {
  const romanNumber = "III";
  const integer = romanToInt(romanNumber);
  console.log(`${romanNumber} --> ${integer}`);
};

const test2 = () => {
  const romanNumber = "LVIII";
  const integer = romanToInt(romanNumber);
  console.log(`${romanNumber} --> ${integer}`);
};

const test3 = () => {
  const romanNumber = "MCMXCIV";
  const integer = romanToInt(romanNumber);
  console.log(`${romanNumber} --> ${integer}`);
};

const test4 = () => {
  const romanNumber = "DCXXI";
  const integer = romanToInt(romanNumber);
  console.log(`${romanNumber} --> ${integer}`);
};

test1();
test2();
test3();
test4();
