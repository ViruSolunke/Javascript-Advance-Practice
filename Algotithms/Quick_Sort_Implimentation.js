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

// ===============================================

// Another Example of Quick Sort =>

// ================================================

// Ques 6: Implement Quick Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Time Complexity -
// Average Case - O(nlog n)
// Best Case - O(nlog n)
// Worst Case - O(n^2)

// Space Complexity -
// Average Case - O(log n)
// Worst Case - O(n)
console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]));

// Approach 2 - Without using left and right Arrays
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}