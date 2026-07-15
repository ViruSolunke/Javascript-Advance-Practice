// Countdown

function countdown(n) {
  // Base case
  if (n < 1) {
    return [];
  }

  // Recursive case
  return [n].concat(countdown(n - 1));
}

console.log(countdown(10));
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(countdown(5));
// [5, 4, 3, 2, 1]

console.log(countdown(1));
// [1]

console.log(countdown(0));
// []

console.log(countdown(-1));
// []


// Range Count

function rangeOfNumbers(startNum, endNum) {
  // Base case
  if (startNum === endNum) {
    return [startNum];
  }

  // Recursive case
  return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
}

console.log(rangeOfNumbers(1, 5));
// [1, 2, 3, 4, 5]

console.log(rangeOfNumbers(6, 9));
// [6, 7, 8, 9]

console.log(rangeOfNumbers(4, 4));
// [4]

console.log(rangeOfNumbers(10, 15));
// [10, 11, 12, 13, 14, 15]

console.log(rangeOfNumbers(2, 8));
// [2, 3, 4, 5, 6, 7, 8]