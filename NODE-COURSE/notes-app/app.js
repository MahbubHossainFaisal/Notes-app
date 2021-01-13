const chalk = require('chalk')


 const getNotes = require('./notes.js')

 const note = getNotes()

 console.log(note)


 console.log(chalk.green.bold.underline('Success'))




