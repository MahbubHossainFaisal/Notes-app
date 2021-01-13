const chalk = require('chalk')


 const getNotes = require('./notes.js')

 const note = getNotes()

 console.log(note)


 console.log(chalk.green.bold.underline('Success'))


const command = process.argv[2]

if(command === 'add'){
    console.log('adding note')
} else if(command === 'remove') {
    console.log('removing notes')
}

