let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, not read yet`
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const bookOne = new Book(
    'Harry Potter 1',
    'J.K Roulling',
    237,
    true
)

const bookTwo = new Book(
    'Harry Potter 2',
    'J.K Roulling',
    419,
    false
)

const bookThree = new Book(
    'Harry Potter 3',
    'J.K Roulling',
    537,
    true
)

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);