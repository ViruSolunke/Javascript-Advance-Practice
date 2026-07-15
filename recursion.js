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


// Range of Numbers Generator

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

// Permutation Generator

function permuteString(str, prefix = "", results = []) {
  // Base case
  if (str.length === 0) {
    if (!results.includes(prefix)) {
      results.push(prefix);
    }
    return results;
  }

  // Recursive case
  for (let i = 0; i < str.length; i++) {
    const remaining = str.slice(0, i) + str.slice(i + 1);
    permuteString(remaining, prefix + str[i], results);
  }

  return results;
}

console.log(permuteString("far"));
// ["far", "fra", "afr", "arf", "rfa", "raf"]

console.log(permuteString("fcc"));
// ["fcc", "cfc", "ccf"]

console.log(permuteString("p"));
// ["p"]

console.log(permuteString(""));
// [""]

console.log(permuteString("walk"));
// [
//   "walk", "wakl", "wlak", "wlka", "wkla", "wkal",
//   "awlk", "awkl", "alwk", "alkw", "aklw", "akwl",
//   "lawk", "lakw", "lwak", "lwka", "lkaw", "lkwa",
//   "kawl", "kalw", "kwal", "kwla", "klaw", "klwa"
// ]