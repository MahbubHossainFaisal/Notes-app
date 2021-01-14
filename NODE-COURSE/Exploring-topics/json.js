
const fs = require('fs')
const book = {
    title: 'Ratul er raat din',
    author: 'Dr. Muhammad Zafar Iqbal'
}


const bookJSON = JSON.stringify(book)  // It will convert the book object into string

fs.writeFileSync('book.json',bookJSON)