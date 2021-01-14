const book = {
    title: 'Ratul er raat din',
    author: 'Dr. Muhammad Zafar Iqbal'
}


const bookJSON = JSON.stringify(book)  // It will convert the book object into string

console.log(bookJSON)

console.log(bookJSON.title) // This won't work , as it is a string


//now to make that string again an object

const parseData = JSON.parse(bookJSON) // It will become an object again

console.log(parseData)

console.log(parseData.title) 
console.log(parseData.author)