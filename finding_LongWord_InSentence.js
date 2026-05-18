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