function bouncer(arr) {
  // Filter out falsy values
  return arr.filter(Boolean); // filters out all falsy values from the input array and returns a new array containing only the truthy values. The Boolean function is used as a callback for the filter method, which evaluates each element in the array and returns true for truthy values and false for falsy values. As a result, all falsy values (false, null, 0, "", undefined, NaN) are removed from the array, leaving only the truthy values in the returned array.
}

console.log(bouncer([7, "ate", "", false, 9]))
console.log(bouncer(["a", "b", "c"]))
console.log(bouncer([false, null, 0, NaN, undefined, ""])
)
console.log(bouncer([null, NaN, 1, 2, undefined]))