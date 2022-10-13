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

// const bookOne = new Book(
//     'Harry Potter 1',
//     'J.K Roulling',
//     237,
//     true
// )

// const bookTwo = new Book(
//     'Harry Potter 2',
//     'J.K Roulling',
//     419,
//     false
// )

// const bookThree = new Book(
//     'Harry Potter 3',
//     'J.K Roulling',
//     537,
//     true
// )

// addBookToLibrary(bookOne);
// addBookToLibrary(bookTwo);
// addBookToLibrary(bookThree);


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


const buttonAdd = document.querySelector('#add')
const preForm = document.querySelector('.pre-form')

buttonAdd.addEventListener('click', (event) => {
    preForm.innerHTML = `<form class="add-form">
    <label>Add new book</label>
    <input type="text" id="title" placeholder="Title">
    <input type="text" id="author" placeholder="Author">
    <input type="number" id="pages" placeholder="Pages">
    <div class="have">
        <label>Have you read it?</label>
        <input type="checkbox" id="read" value="true">
    </div>
    <button type="button" id="submit">Submit</button>
</form>`

    const buttonSubmit = document.querySelector('#submit')
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const pages = document.querySelector('#pages')
    const read = document.querySelector('#read')

    const divOverlay = document.querySelector('#overlay')
    divOverlay.style.display = 'block'

    buttonSubmit.addEventListener('click', (event) => {
        divLibrary.innerHTML = ""
        
        addBookToLibrary(new Book(title.value, author.value, pages.value, read.value));
        loopMyLybrary(myLibrary);
        preForm.innerHTML = ""
    })
})

