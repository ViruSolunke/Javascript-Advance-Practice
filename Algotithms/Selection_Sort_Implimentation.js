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