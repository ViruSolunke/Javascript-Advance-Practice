// Step 1: Define the destroyer function
function destroyer(arr, ...valuesToRemove) {
  // Step 2: Use filter to exclude elements that match any of the valuesToRemove
  return arr.filter(item => !valuesToRemove.includes(item));
}

// ✅ Example Tests
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); 
// Output: [1, 1]

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); 
// Output: [1, 5, 1]

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); 
// Output: [1]

console.log(destroyer([2, 3, 2, 3], 2, 3)); 
// Output: []

