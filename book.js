/**
 Create a Book class with properties title, author, and year.
 Add a method to display information about the book using template literals.
 */

 class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }
    Information(){
        return `The book "${this.title}" is written by ${this.author} and was published in the year ${this.year}.`
    }
 }

 const book = new Book(`Muna Madan`, `Laxmi Prasad`, 1936)
 console.log(book.Information())