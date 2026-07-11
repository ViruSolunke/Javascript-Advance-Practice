// 1. Function to generate password
function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = "";
  for (let i = 0; i < length; i++) {
    // pick a random index  // Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). Math.floor() rounds a number down to the nearest whole number. chars.length gives the total number of characters in the chars string. 
    let randomIndex = Math.floor(Math.random() * chars.length); // Generate a random index by multiplying a random decimal number (between 0 and 1) with the length of the chars string, and then using Math.floor to round it down to the nearest whole number. This ensures that the random index is a valid position within the chars string.
    result += chars[randomIndex]; // Append the character at the randomly generated index from the chars string to the result variable, which will build up the final password string as the loop iterates for the specified length.
  }
  return result;
}

// 2. Call the function and store in password variable
let password = generatePassword(12); // you can change 12 to any desired length

// 3. Log the result
console.log("Generated password: " + password);
