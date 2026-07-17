function insertionSort(arr) {

  // Start from the second element
  for (let i = 1; i < arr.length; i++) {

    // Store the current value
    let current = arr[i];

    // Previous element index
    let j = i - 1;

    // Move larger elements one position ahead
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert current value at the correct position
    arr[j + 1] = current;
  }

  return arr;
}

// Test
console.log(
  insertionSort([5, 4, 33, 2, 8])
);

// ================================================================
// Another Example of Insertion sort =>

// ================================================================

// Ques 3: Implement Insertion Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14,33,8,11] ----->>>>>  Output: [8,10,11,14,14,29,33,37]

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // n
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // n
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// Space Complexity = O(1)