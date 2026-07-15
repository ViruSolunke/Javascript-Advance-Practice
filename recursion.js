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