function chunkArrayInGroups(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) { // Loop through the array in increments of the specified size i += size means that we will jump to the next chunk of the array in each iteration
    result.push(arr.slice(i, i + size)); // Use slice to create a subarray of the specified size and push it to the result array
  }

  return result;
}

// Examples
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// [["a", "b"], ["c", "d"]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// [[0, 1, 2], [3, 4, 5]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
// [[0, 1, 2], [3, 4, 5], [6]]

