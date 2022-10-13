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


const divLibrary = document.querySelector('.library')

function loopMyLybrary(library) {
    for (let i = 0; i < library.length; i++){
        console.log(library[i].info())
        const bookCard = document.createElement('div')
        bookCard.classList.add('book')
        bookCard.textContent = library[i].info()
        divLibrary.appendChild(bookCard)
    }
}

loopMyLybrary(myLibrary);