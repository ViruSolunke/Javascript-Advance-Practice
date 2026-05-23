// Step 1: Create the books array with at least three objects
const books = [
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
  { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 }
];

// Step 2: Define the sortByYear callback function
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// Step 3: Filter out books written after a certain year (e.g., 1950)
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

// Step 4: Sort the filteredBooks array in ascending order by releaseYear
filteredBooks.sort(sortByYear);

// Debugging output (optional, helps you see results)
console.log("All Books:", books);
console.log("Filtered & Sorted Books:", filteredBooks);
