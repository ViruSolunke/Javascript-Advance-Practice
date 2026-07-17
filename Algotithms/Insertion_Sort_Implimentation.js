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