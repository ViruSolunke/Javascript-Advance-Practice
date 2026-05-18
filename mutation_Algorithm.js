function mutation(arr) {  // Convert both strings to lowercase for case-insensitive comparison
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();

  for (let i = 0; i < secondStr.length; i++) { 
    if (!firstStr.includes(secondStr[i])) { // If any character from the second string is not found in the first string, return false
      return false;
    }
  }

  return true;
}

// Examples
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"]));   // false
console.log(mutation(["Alien", "line"]));  // true