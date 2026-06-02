// Step 1: Define the diffArray function
function diffArray(arr1, arr2) {
  // Step 2: Use filter to find items only in arr1
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
  
  // Step 3: Use filter to find items only in arr2 
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item)); 
  
  // Step 4: Concatenate both results to get the symmetric difference
  return onlyInArr1.concat(onlyInArr2);
}

// ✅ Example Test
console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]));
// Output: ["diamond", "apple", "emerald", "bread"]


