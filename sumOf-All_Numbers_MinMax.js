function sumAll(arr) {
  // Get the two numbers
  let num1 = arr[0];
  let num2 = arr[1];

  // Find min and max
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  // Sum all numbers between min and max inclusive
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i; // Add the current number i to the sum variable, which accumulates the total sum of all numbers from min to max (inclusive) as the loop iterates through each number in that range.
  }

  return sum;
}
console.log(sumAll([1, 4]))
console.log(sumAll([5, 10]))