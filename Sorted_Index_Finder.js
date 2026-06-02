// Step 1: Define the getIndexToIns function
function getIndexToIns(arr, num) {
  // Step 2: Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Step 3: Use findIndex to locate the lowest index
  let index = arr.findIndex(value => num <= value);

  // Step 4: If no index found, return array length (insert at end)
  return index === -1 ? arr.length : index;
}

// ✅ Examples to test
console.log(getIndexToIns([1, 2, 3, 4], 1.5)); // 1
console.log(getIndexToIns([20, 3, 5], 19));    // 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([40, 60], 50));      // 1
console.log(getIndexToIns([], 5));             // 0

