/*
In this lab, you will create a function that repeats a given string a specific number of times.
For the purpose of this lab, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  let result = "";

  // if a number is negative, return an empty string
  if (num <= 0) {
    return "number is negative or less than or equal to zero";
  }

  // Repeat the string num times and concatenate it to the result variable
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

// Test Cases
console.log(repeatStringNumTimes("*", 3));
// ***

console.log(repeatStringNumTimes("abc", 3));
// abcabcabc

console.log(repeatStringNumTimes("abc", 4));
// abcabcabcabc

console.log(repeatStringNumTimes("abc", -2));
// ""