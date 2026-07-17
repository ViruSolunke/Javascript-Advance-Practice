function bubbleSort(arr) {

  // Get the length of the array
  let n = arr.length;

  // Outer loop - controls how many passes we make
  for (let i = 0; i < n - 1; i++) {

    // Assume no swapping happens in this pass
    let swapped = false;

    // Inner loop - compare adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {

      // If the left element is greater than the right element
      // swap them
      if (arr[j] > arr[j + 1]) {

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    // If no swaps happened,
    // the array is already sorted
    if (!swapped) {
      break;
    }
  }

  // Return the sorted array
  return arr;
}

// Example
console.log(
  bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
);