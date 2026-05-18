/*
In this lab, you will build a function that returns the length of the longest word in the provided sentence.
For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped",
which has a length of 6. Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
*/ 

function findLongestWordLength(sentence) {
  let words = sentence.split(" ")
  let longWord = "";
   for (let word of words) {
    if(word.length > longWord.length) {
      longWord = word
    }
   }
   return longWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWordLength("May the force be with you"))