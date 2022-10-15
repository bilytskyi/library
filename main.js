let myLibrary = [];
let myData = [];

function Book(title, author, pages, read, id) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id
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
        if (typeof library[i] !== 'undefined') {
            let text = 'not read'
            if (library[i].read) {
                text = 'read'
            }
            const bookCard = document.createElement('div')
            bookCard.classList.add('book')
            bookCard.innerHTML = `
            <button class="delete" id="${library[i].id}">delete</button>
            <button class="read" id="${library[i].id}">${text}</button>
            <p>${library[i].info()}</p>
            `
            divLibrary.appendChild(bookCard)
        }
    }
}


loopMyLybrary(myLibrary);


const buttonAdd = document.querySelector('#add')

const buttonSubmit = document.querySelector('#submit')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')
const divOverlay = document.querySelector('#overlay')


buttonAdd.addEventListener('click', (event) => {
    divOverlay.style.display = 'block'
})

buttonSubmit.addEventListener('click', (event) => {
    divLibrary.innerHTML = ""

    addBookToLibrary(new Book(title.value, author.value, pages.value, read.checked, myLibrary.length));
    loopMyLybrary(myLibrary);

    title.value = ''
    author.value = ''
    pages.value = ''

    divOverlay.style.display = 'none'
})

let buttonDeletes = document.querySelectorAll('button.delete')
let buttonReads = document.querySelectorAll('button.read')

window.addEventListener('mousemove', (event) => {
    buttonDeletes = document.querySelectorAll('button.delete')

    buttonDeletes.forEach((buttonDelete) => {
        buttonDelete.addEventListener('click', (event) => {
            divLibrary.innerHTML = ""
            delete myLibrary[buttonDelete.getAttribute('id')]
            loopMyLybrary(myLibrary);
        });
    });


    buttonReads = document.querySelectorAll('button.read')

    buttonReads.forEach((buttonRead) => {
        buttonRead.addEventListener('click', (event) => {
            divLibrary.innerHTML = ""
            myLibrary[buttonRead.getAttribute('id')].read = !myLibrary[buttonRead.getAttribute('id')].read;
            loopMyLybrary(myLibrary);
        });
    });
})