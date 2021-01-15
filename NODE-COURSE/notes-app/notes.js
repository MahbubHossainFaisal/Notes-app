const chalk = require('chalk')
const fs = require('fs')
const { title } = require('process')

const getNotes = () => {
    return "this a test....."
}
const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)

    if(!duplicateNotes){

     notes.push({
        title: title,
        body: body
        })

        saveNotes(notes)

        console.log(chalk.green('New note has been added'))

    } else {
        console.log(chalk.yellow('Note title already taken'))
    }

   
}

const removeNote= (title) => {
   const notes = loadNotes()

   const notesToKeep = notes.filter((note) => note.title !== title )
    

    saveNotes(notesToKeep)
    if(notes.length === notesToKeep.length) {
        console.log (chalk.blue('No notes found to remove!!!'))
    }
    if(notes.length > notesToKeep.length) {
        console.log(chalk.red.inverse('Notes has been removed !!!'))
    }

}

const listNotes = () => {
    

    const notes = loadNotes()
    console.log(chalk.red('Your Notes'))
    
   

   if(notes.length>0) {

        notes.forEach((note) => {
        console.log(note.title)
    })
   } else {
       console.log('Sorry! There is no notes to show')
   }
}


const readNote = (title) => {
    const notes = loadNotes()
    const particularNote = notes.find((note) => note.title === title)
    if(particularNote){
        console.log('Title: ' + chalk.green(particularNote.title))
        console.log(chalk.white('Body: ' + particularNote.body))
    } else {
        console.log('Sorry! There is no such note!!!')
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
}