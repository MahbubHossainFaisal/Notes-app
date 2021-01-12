// const add = require('./utils.js')

// const sum = add(5,4)

// console.log(sum)


// const getNotes = require('./notes.js')

// const note = getNotes()

// console.log(note)

const validator = require('validator')

console.log(validator.isEmail('mahbub@gmail.com')) // will return true

console.log(validator.isEmail('13m_a@gmail.com')) // will return true

console.log(validator.isEmail('mahbubyahoo.com')) // will return false

//Another validator method 

console.log(validator.isURL('www.facebook.com')) //will return true
console.log(validator.isURL('http://www.facebook.com')) //will return true
console.log(validator.isURL('https//www.facebook.com')) // will return false
