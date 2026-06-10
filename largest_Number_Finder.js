function largestOfAll(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    // Find the largest number in each sub-array
    let largest = arr[i][0]; // Start with the first element as the largest
    for (let j = 1; j < arr[i].length; j++) { // Start from the second element to compare with the current largest 
      if (arr[i][j] > largest) { // If the current element is larger than the largest found so far 
        largest = arr[i][j]; // Update the largest variable to the current element
      }
    }
    results.push(largest); // After finding the largest number in the current sub-array, push it to the results array
  }
  return results; // Return the array containing the largest numbers from each sub-array
}

/* First Number Finder

function findElement(arr, func) {  // works like a filter function, but instead of returning an array of all elements that pass the test, it returns the first element that passes the test. If no elements pass the test, it returns undefined.
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) { // If the function returns true for the current element, return that element
      return arr[i];
    }
  }
  return undefined;
}
*/