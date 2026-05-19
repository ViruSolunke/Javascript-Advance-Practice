function titleCase(str) {
  return str
    .toLowerCase()                // make the whole string lowercase
    .split(" ")                   // split into words
    .map(word =>                  // it takes each word and capitalizes the first letter while keeping the rest of the letters lowercase.
      word.charAt(0).toUpperCase() + word.slice(1) // capitalize first letter
    )
    .join(" ");                   // join words back into a string
}

console.log(titleCase("I like to code"))