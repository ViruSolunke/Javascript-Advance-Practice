function quicksort(arr) {

  // Base Case
  // Agar array me 0 ya 1 element hai to wo already sorted hai.
  if (arr.length <= 1) {
    return arr;
  }

  // Last element ko Pivot maan rahe hain.
  const pivot = arr[arr.length - 1];

  // Pivot se chhote elements
  const left = [];

  // Pivot se bade ya equal elements
  const right = [];

  // Last element (pivot) ko skip karke compare karo
  for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursive Call
  return [...quicksort(left), pivot, ...quicksort(right)];
}

// Test
console.log(
  quicksort([5, 4, 33, 2, 8])
);