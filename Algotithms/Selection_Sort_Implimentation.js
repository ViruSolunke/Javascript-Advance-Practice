function selectionSort(arr) {

  // Loop through each position in the array
  for (let i = 0; i < arr.length - 1; i++) {

    // Assume the current position has the smallest value
    let minIndex = i;

    // Search for the smallest value in the remaining array
    for (let j = i + 1; j < arr.length; j++) {

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap if a smaller value was found
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Test
console.log(
  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
);

// ==========================================================
// Another Example of Selection Sort =>

// ===========================================================

// Ques 2: Implement Selection Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14]  ----->>>>>  Output: [10,14,14,29,37]

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // n
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // n
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([29, 10, 14, 37, 14]));

// Time Complexity = O(n^2)
// Space Complexity = O(1)


// ==================================================
// Sort() Method =>

// =================================================


// Sort() Method in Javascript

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

console.log(fruits.sort());

const nums = [10, 5, 18, 1, 27];

const compareFunction = (a, b) => {
  // 1. <0 => a comes first
  // 2. 0  => nothing changes
  // 3. >0 => b comes first

  return b - a;
};

console.log(nums.sort(compareFunction));

const people = [
  {name: "Piyush", age: 25},
  {name: "Suyash", age: 22},
  {name: "Raj", age: 30},
  {name: "Ishan", age: 27},
];

const compareFunctionForObj = (a, b) => {
  // 1. <0 => a comes first
  // 2. 0  => nothing changes
  // 3. >0 => b comes first

  return a.age - b.age;
};

console.log(people.sort(compareFunctionForObj));