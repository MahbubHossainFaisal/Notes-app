
const fs = require('fs')

// // const book = {
// //     title: 'Ratul er raat din',
// //     author: 'Dr. Muhammad Zafar Iqbal'
// // }


// // const bookJSON = JSON.stringify(book)  // It will convert the book object into string

// // fs.writeFileSync('book.json',bookJSON)

// const dataBuffer = fs.readFileSync('book.json')
// console.log(dataBuffer) // We will get the data as sequence of numbers

// // to get the string back we have to use
// const dataJSON = dataBuffer.toString()
// console.log(dataJSON)


// //Now we can parse that string to be object again
// const data = JSON.parse(dataJSON)
// console.log(data.title)
// console.log(data.author)

const dataBuffer = fs.readFileSync('book.json')

const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)

data.name = 'Faisal'

data.age = 24

const userJSON = JSON.stringify(data)

fs.writeFileSync('book.json',userJSON)

