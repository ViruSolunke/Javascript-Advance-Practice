const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  for (let i = 0; i < contacts.length; i++) {
    // Name match hua
    if (contacts[i].firstName === name) {

      // Property exist karti hai
      if (contacts[i].hasOwnProperty(property)) {
        return contacts[i][property];
      } else {
        return "No such property";
      }
    }
  }

  // Agar name hi nahi mila
  return "No such contact";
}

// Test Cases
console.log(lookUpProfile("Kristian", "lastName")); 
// Vos

console.log(lookUpProfile("Sherlock", "likes")); 
// ["Intriguing Cases", "Violin"]

console.log(lookUpProfile("Bob", "number")); 
// No such contact

console.log(lookUpProfile("Akira", "address")); 
// No such property