/*
Define an object to represent a book with properties like title, author, year, and genre.
Write a function that takes this object as input and returns a string summary like:
"Title: [title], Author: [author], Published in: [year]".
Add a new property rating to the book object and update its value
*/

let book = {
    title: "One Piece",
    author: "Echidora Oda",
    year: 1999,
    genre: "Adventure"
};
function getBook(book){
    return `Title: ${book.title}, Author: ${book.author}, Published in: ${book.year}`
}

//Adding new property 'rating'
book.rating = 9.8

console.log(getBook(book))

console.log(book)